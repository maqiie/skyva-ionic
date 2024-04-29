
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faBars,
  faSignOutAlt,
  faTimes, // Add the faTimes icon
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!userName);
  }, [userName]);

  useEffect(() => {
    fetchUserData();
    fetchCartItemCount();
  }, [location.pathname]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "https://skyva-api-1.onrender.com/auth/validate_token"
      );
      const userData = response.data.data;
      const name = userData.name;
      setUserName(name);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchCartItemCount = async () => {
    try {
      const response = await axios.get(
        "https://skyva-api-1.onrender.com/carts/item_count"
      );
      const itemCount = response.data.itemCount;
      setCartItemCount(itemCount);
    } catch (error) {
      console.error("Error fetching cart item count:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUserName("");
    showToast("Logged out successfully");
  };

  const showToast = (message) => {
    console.log("Toast message:", message);
  };

  return (
    // <nav className="bg-gray-800 p-4">
          <nav className="bg-gray-800 p-4 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-200"
              >
                <span className="text-4xl font-bold">Skyva</span>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/product"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                to="/cart"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
                {cartItemCount > 0 && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full ml-1">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <div className="hidden sm:block">
                {!isLoggedIn ? (
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <FontAwesomeIcon icon={faUser} className="text-xl" />
                  </Link>
                ) : (
                  
                  <div className="flex items-center">
                    <span className="text-gray-300 mr-4">Welcome,</span>
                    <span className="text-cyan-300 text-lg">{userName}</span>
                    <button
                      onClick={handleLogout}
                      className="ml-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-medium flex items-center"
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </div>
     
      {showMenu && (
  <div className="sm:hidden bg-gray-900">
    <div className="px-4 py-3">
      {isLoggedIn && (
        <div className="flex items-center justify-between mb-3">
          <p className="text-gray-300 text-lg">Welcome, <span className="text-cyan-300">{userName}</span></p>
          <button
            onClick={() => setShowMenu(false)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} className="text-lg" />
          </button>
        </div>
      )}
    </div>
    <div className="border-t border-gray-800">
      <nav className="mt-3">
        <Link
          to="/about"
          className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          About
        </Link>
        <Link
          to="/product"
          className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          Contact
        </Link>
        {!isLoggedIn ? (
          <Link
            to="/login"
            className="block py-2 px-4 mt-4 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="block py-2 px-4 mt-4 text-gray-300 hover:bg-gray-800 hover:text-white flex items-center"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </button>
        )}
      </nav>
    </div>
  </div>
)}


    </nav>
  );
};

export default Navbar;
