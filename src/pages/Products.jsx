import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  // State for products, category, pagination, and selected category
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Fetch products and categories from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get("http://localhost:5000/api/products");
        setProducts(productsResponse.data);

        const categoriesResponse = await axios.get("http://localhost:5000/api/categories");
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  // Filter products based on selected category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  // Get products for current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="px-4 py-6 mx-auto max-w-6xl">
      <h2 className="text-center text-2xl font-bold mb-6">Products</h2>

      {/* Dropdown to filter products by category */}
      <div className="mb-6">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          className="p-2 border rounded-md w-full sm:w-1/4 mx-auto"
        >
          <option value="all">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display products in a grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-6">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
          >
            <img
              src={`http://localhost:5000${product.imageUrl}`}
              alt={product.name}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.category}</p>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= filteredProducts.length}
          className="px-4 py-2 mx-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
