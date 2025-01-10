import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path as necessary
import Home from "./pages/Home"; // Assuming the Home component is in the pages folder
import Products from "./pages/Products";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
