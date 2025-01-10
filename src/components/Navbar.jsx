import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-white hover:text-blue-200 transition duration-300">
          SILKON
        </Link>
        <div className="space-x-6 flex items-center">
          <Link to="/" className="text-white font-medium hover:text-blue-200 transition duration-300">
            Home
          </Link>
          <Link to="/products" className="text-white font-medium hover:text-blue-200 transition duration-300">
            Our Products
          </Link>
          <Link to="/admin" className="text-white font-medium hover:text-blue-200 transition duration-300">
            Admin Panel
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
