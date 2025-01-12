import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsVisible(true);
        clearTimeout(timeoutId);
        return;
      }

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
        setTimeoutId(newTimeoutId);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY, timeoutId]);

  return (
    <>
      {/* Common Navbar Class */}
      <style>
        {`
          .navbar-transition {
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
          }
          .navbar-hidden {
            transform: translateY(-100%);
            opacity: 0;
          }
          .navbar-visible {
            transform: translateY(0);
            opacity: 1;
          }

          /* Ensure mobile menu button shows when screen <= 884px */
          @media (max-width: 884px) {
            .navbar-links,
            .search-login {
              display: none;
            }
            .mobile-menu-btn {
              display: block;
            }
          }

          /* Ensure mobile menu is hidden by default */
          .mobile-menu {
            display: none;
          }

          /* Show mobile menu when menu is open */
          .mobile-menu-open {
            display: block;
          }
        `}
      </style>

      <div className="w-full flex justify-center">
        <nav
          className={`fixed top-5 transform -translate-x-1/2 w-9/12 sm:w-9/12 md:w-3/4 lg:w-2/3 z-20 bg-white/30 backdrop-blur-sm shadow-md rounded-full px-4 py-3 navbar-transition ${isVisible ? "navbar-visible" : "navbar-hidden"}`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 mr-4">
              <Link
                to="/"
                className="text-3xl font-extrabold text-white transition duration-300">
                SilkOn
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6 navbar-links">
              <Link
                to="/"
                className="text-white font-medium hover:text-gray-800 transition duration-300 hover:pb-1"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-white font-medium hover:text-gray-800 transition duration-300 hover:pb-1"
              >
                Our Products
              </Link>
              <Link
                to="/admin"
                className="text-white font-medium hover:text-gray-800 transition duration-300 hover:pb-1"
              >
                Admin Panel
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4 search-login">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium hover:bg-gray-800 hover:text-gray-200 transition duration-300"
              >
                Login
              </button>
            </div>

            <div className="md:hidden mobile-menu-btn">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenuAlt3 className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`md:hidden mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""
              } bg-black/70 backdrop-blur-md shadow-lg absolute top-14 left-0 w-full rounded-b-lg`}
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link
                to="/"
                className="relative text-white font-medium transition duration-300 transform hover:-translate-y-1 hover:text-gray-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
                <span
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-400 scale-x-0 transform transition-transform duration-300 origin-left hover:scale-x-100"
                ></span>
              </Link>
              <Link
                to="/products"
                className="text-white font-medium hover:text-gray-400 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Products
              </Link>
              <Link
                to="/admin"
                className="text-white font-medium hover:text-gray-400 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin Panel
              </Link>

              <div className="w-full px-4">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>

                <Link
                  to="/login"
                  className="block w-full text-center bg-gray-500 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-600 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
