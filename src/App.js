

import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Navbar/Login/Login";
import MapComponent from "./components/Maps/MapComponent";
import AboutUs from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Producst from "./components/Products/Products";
import Admin from "./components/Admin/Admin";
import Contact from "./components/About/Contact";
import ChatComponent from "./components/Chat/ChatComponent";
import Checkout from "./components/Cart/Checkout";
import { useEffect, useState } from "react";
import axios from "axios";
import Cosmetics from "./components/Products/Cosmetics";
import Women from "./components/Products/Women";
import Clothes from "./components/Products/Clothes";
import Shoes from "./components/Products/Shoes";
import About from "./components/About/About";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // State for storing user data

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        "https://skyva-api-1.onrender.com/${userId}/get_cart"
      );
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    axios.interceptors.request.use((config) => {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    });

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://skyva-api-1.onrender.com/auth/validate_token"
        );
        const userData = response.data.data;
        setCurrentUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const storedToken = localStorage.getItem("authToken");
    const isLoggedIn = !!storedToken;

    if (isLoggedIn) {
      fetchUserData();
    }
  }, []);

  const cartItemCount = cartItems.length;

  return (
    <div>
      <BrowserRouter>
      <Navbar cartItemCount={cartItemCount} currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart/:id?" element={<Cart currentUser={currentUser} />} />
          <Route path="/checkout" element={<Checkout currentUser={currentUser}/>} />
          <Route path="/product" element={<Producst />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="women" element={<Women />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="/about" element={<About/>}/>


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
