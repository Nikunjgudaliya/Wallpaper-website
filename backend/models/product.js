// product.js (Mongoose Model)
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true }, // Match the case 'imageUrl'
});

module.exports = mongoose.model("Product", productSchema);
