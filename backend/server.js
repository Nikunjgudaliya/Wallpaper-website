const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const Product = require("./models/product");
const app = express();
require("dotenv").config();
var cors = require("cors");
app.use(cors());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect("mongodb://localhost:27017/clothing-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

app.post("/api/products", upload.single("image"), async (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Uploaded File:", req.file);

  const { name, category } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

  if (!name || !category || !imageUrl) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newProduct = new Product({ name, category, imageUrl });
    await newProduct.save();
    return res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (err) {
    console.error("Error saving product:", err);
    return res
      .status(500)
      .json({ message: "Error saving product", error: err });
  }
});

// Update to handle category filtering
app.get("/api/products", async (req, res) => {
  const { category } = req.query; // Get category filter from query params

  try {
    let products;
    if (category) {
      // If category is provided, filter products by category
      products = await Product.find({ category });
    } else {
      // Otherwise, return all products
      products = await Product.find();
    }
    console.log("Products fetched:", products);
    return res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    return res.status(500).json({ message: "Error fetching products" });
  }
});

app.put("/api/products/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { name, category } = req.body;
  const imageUrl = req.file
    ? `/uploads/${req.file.filename}`
    : req.body.imageUrl;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, category, imageUrl },
      { new: true }
    );
    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({ message: "Error updating product", error: err });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting product", error: err });
  }
});

app.get("/api/categories", async (req, res) => {
  try {
    const products = await Product.find();
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
