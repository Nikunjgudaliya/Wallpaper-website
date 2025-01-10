import React, { useState, useEffect } from "react";
import Carousel from "react-slick"; // Assuming you use react-slick for the carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"; // To make API calls

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/categories");
        const categoriesData = response.data;

        // Fetch items for each category
        const categoriesWithItems = await Promise.all(
          categoriesData.map(async (category) => {
            const itemsResponse = await axios.get(
              `http://localhost:5000/api/products?category=${category}`
            );
            return { name: category, items: itemsResponse.data };
          })
        );

        setCategories(categoriesWithItems);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth >= 1024 ? 6 : windowWidth >= 600 ? 4 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    pauseOnHover: true,
    prevArrow: <div className="custom-prev-arrow">Prev</div>,
    nextArrow: <div className="custom-next-arrow">Next</div>,
  };

  const toggleCarousel = () => {
    setShowCarousel(!showCarousel);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Welcome Section with Full Screen Background */}
      <div
        className="relative bg-cover bg-center h-screen text-center text-white flex items-center justify-center" style={{ backgroundImage: `url('/wallpaper/lake.jpg')` }}>
        <div className="bg-black bg-opacity-30 w-full h-full absolute inset-0 z-0" ></div> {/* Reduced opacity */}
        <div className="z-10">
          <h1 className="text-5xl font-bold">Welcome to Our Wallpaper Store</h1>
          <p className="mt-4 text-lg">Discover stunning wallpapers for every mood and occasion</p>
        </div>
      </div>


      {/* Toggle Button for Categories */}
      <div className="flex justify-center mt-8">
        <button
          onClick={toggleCarousel}
          className="bg-blue-600 text-white py-2 px-4 w-full rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Browse Categories
        </button>
      </div>

      {/* Show Carousel if toggle is true */}
      {showCarousel && (
        <div className="relative mb-8 mt-12">
          <Carousel {...settings}>
            {categories.map((category, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.name}</h3>

                {/* Display one item from each category */}
                <div className="flex justify-center">
                  {category.items.slice(0, 1).map((item, idx) => (
                    <div
                      key={idx}
                      className="w-64 h-64 mx-4 bg-white rounded-lg shadow-lg relative overflow-hidden">
                      <img
                        src={`http://localhost:5000${item.imageUrl}`}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                        <h4 className="text-lg">{item.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}

      {/* Featured Products Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <img
            src="https://via.placeholder.com/200"
            alt="Product 1"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Product 1</h3>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <img
            src="https://via.placeholder.com/200"
            alt="Product 2"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Product 2</h3>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <img
            src="https://via.placeholder.com/200"
            alt="Product 3"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Product 3</h3>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <img
            src="https://via.placeholder.com/200"
            alt="Product 4"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">Product 4</h3>
        </div>
      </div>

      {/* More Featured Sections */}
      <div className="my-12 bg-cover bg-center relative" style={{ backgroundImage: "url('https://via.placeholder.com/1500x1000')" }}>
        <div className="bg-black bg-opacity-50 w-full h-full absolute inset-0 z-10"></div>
        <div className="z-20 text-center text-white py-12">
          <h3 className="text-3xl font-bold">Stunning Wallpaper Collection</h3>
          <p className="mt-4 text-xl">Transform your space with our premium wallpaper collection</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
