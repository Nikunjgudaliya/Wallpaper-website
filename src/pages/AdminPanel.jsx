import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminPanel() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");
    const [image, setImage] = useState(null);
    const [products, setProducts] = useState([]);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [currentProductId, setCurrentProductId] = useState(null);

    const categories = ["Nature", "Urban", "Abstract", "Mountains", "Waterfalls", "Beaches", "Space", "Cityscapes"];

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/products");
            setProducts(response.data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !category || !image) {
            setMessage("All fields are required!");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("category", category);
        formData.append("image", image);

        try {
            if (isUpdateMode) {
                const response = await axios.put(`http://localhost:5000/api/products/${currentProductId}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                setMessage(response.data.message);
                setIsUpdateMode(false);
                setCurrentProductId(null);
            } else {
                const response = await axios.post("http://localhost:5000/api/products", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                setMessage(response.data.message);
            }
            setName("");
            setCategory("");
            setImage(null);
            fetchProducts(); // Refresh products list
        } catch (err) {
            setMessage(err.response?.data?.message || "Error submitting product.");
        }
    };

    const handleUpdate = (product) => {
        setIsUpdateMode(true);
        setCurrentProductId(product._id);
        setName(product.name);
        setCategory(product.category);
        setImage(null); // Optionally set a preview of the image
    };

    const handleDelete = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/products/${productId}`);
            setMessage(response.data.message);
            fetchProducts(); // Refresh products list
        } catch (err) {
            setMessage("Error deleting product.");
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">Admin Panel</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Enter Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        {isUpdateMode ? "Update Product" : "Add Product"}
                    </button>
                </div>
            </form>

            {message && <p className="text-red-500 mt-4">{message}</p>}

            <h3 className="text-2xl font-bold mt-8 mb-4">Products List</h3>
            <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Name</th>
                        <th className="py-2 px-4 border-b text-left">Category</th>
                        <th className="py-2 px-4 border-b text-left">Image</th>
                        <th className="py-2 px-4 border-b text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product._id}>
                                <td className="py-2 px-4 border-b">{product.name}</td>
                                <td className="py-2 px-4 border-b">{product.category}</td>
                                <td className="py-2 px-4 border-b">
                                    <img
                                        src={`http://localhost:5000${product.imageUrl}`}
                                        alt={product.name}
                                        className="w-24 h-24 object-cover"
                                    />
                                </td>
                                <td className="py-2 px-4 border-b space-x-4">
                                    <button
                                        onClick={() => handleUpdate(product)}
                                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center py-4">No products available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPanel;
