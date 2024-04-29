import React, { Component, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { Link } from "react-router-dom"; // Import Link from your routing library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/shopping.jpg";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";

const swiperImages = [image1, image2, image3]; // Add more image URLs as needed

const Home = () => {
  const [recentProducts, setRecentProducts] = useState([]);
  const [onOfferProducts, setOnOfferProducts] = useState([]);
  const [cartId, setCartId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    AOS.init();
    fetchRecentProducts();
    fetchOnOfferProducts();
    // if (isLoggedIn) {
    fetchUserData();
    // }
  }, [isLoggedIn]);

  const fetchUserData = () => {
    fetch(`https://skyva-api-1.onrender.com/auth/registrations/show?id=1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((userData) => {
        console.log("User data:", userData); // Log the user data
        const cartId = userData.cart_id;
        if (cartId) {
          console.log("User's cart ID:", cartId);
          setCartId(cartId);
        } else {
          console.error("Cart ID not found in user data");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const fetchRecentProducts = async () => {
    try {
      const response = await axios.get(
        "https://skyva-api-1.onrender.com/products/recently_added?limit=8"
      );
      // console.log("Fetched recent products:", response.data);
      setRecentProducts(response.data);
      console.log("Cart ID in response data:", response.data.cartId);
    } catch (error) {
      console.error("Error fetching recent products:", error);
    }
  };

  const fetchOnOfferProducts = async () => {
    try {
      const response = await axios.get(
        "https://skyva-api-1.onrender.com/products/on_offer"
      );
      // Log the fetched product data
      console.log("Fetched on offer products:");

      // Set the state with the fetched product data
      setOnOfferProducts(response.data);

      // Log the image URLs
      response.data.forEach((product) => {
        console.log("Image URL for product:");
      });

      console.log("Cart ID in response data:");
    } catch (error) {
      console.error("Error fetching on offer products:", error);
    }
  };

  const addToCart = async (productId) => {
    console.log("Product ID:", productId); // Log the productId value
    try {
      await axios.post(`https://skyva-api-1.onrender.com/carts/${cartId}/add_to_cart`, {
        product_id: productId,
        quantity: 1,
      });
      console.log("Item added to cart successfully");
      toast.success("Item added to cart successfully"); // Show success toast
    } catch (error) {
      console.error("Error adding item to cart:", error.response.data);
      toast.error("Error adding item to cart"); // Show error toast
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    lazyLoad: "ondemand",
  };
  return (
    <div className="home-container">
      <div
        className="relative image-container overflow-hidden rounded-md mt-12 sm:mt-16 md:mt-20"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        {/* Image */}
        <img
          src={img}
          alt="Shopping"
          className="w-full h-auto mt-4 sm:mt-8 md:mt-12"
        />

        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 sm:p-6 md:p-8">
          <div
            className="center animated"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4">
              New Outwear
              <br /> Collection
            </h2>

            <div
              className="button-container"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button className="text-white py-2 px-3 sm:px-4 rounded-full font-semibold text-xs sm:text-sm md:text-base transition duration-300">
                <Link to="/product">Shop Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <============Category================= */}
      <section className="hero-section" data-aos="fade-up" data-aos-delay="600">
        <h2 className="text-3xl text-black font-bold mb-8 text-center">
          Category
        </h2>
        <div className="card-grid">
          <Link to="/cosmetics" className="card">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1580326939256-bd950d90b81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvc21ldGljc3xlbnwwfDB8MHx8fDA%3D)",
              }}
            ></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Cosmetics</h3>
            </div>
          </Link>
          
          <Link to="/shoes" className="card">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D)",
              }}
            ></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Shoes</h3>
            </div>
          </Link>
          <Link to="/clothes" className="card">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1561526116-e2460f4d40a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhzfGVufDB8MHwwfHx8MA%3D%3D)",
              }}
            ></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Clothes</h3>
            </div>
          </Link>
          <Link to="/women" className="card">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1699570048416-464809789279?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlc3MlMjBzZXdpbmd8ZW58MHwwfDB8fHww)",
              }}
            ></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Women</h3>
            </div>
          </Link>
        </div>
      </section>
      ;{/* <======newests products========> */}
      <section className="new" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-3xl text-black font-bold mb-8 text-center">
          Newest Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recentProducts.slice(0, 8).map((product, index) => (
            <div
              key={index}
              className="card1 bg-white p-4 rounded-md shadow-md"
            >
              <div className="w-full h-60 overflow-hidden mb-4 rounded-md">
                {product.image_url && (
                  <img
                    src={`https://skyva-api-1.onrender.com${product.image_url}`}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-md"
                    style={{ aspectRatio: "16/10" }} // Adjust the aspect ratio as needed
                  />
                )}
              </div>

              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-semibold text-black">
                  {product.name}
                </p>
                <p className="text-lg font-semibold text-black">
                  {product.price} TZS
                </p>
      
              </div>

              <button
                className="CartBtn mt-4"
                onClick={() => addToCart(product.id)}
              >
                <span className="IconContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill="rgb(17, 17, 17)"
                    className="cart"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"></path>
                  </svg>
                </span>
                <span className="ml-2">Add to Cart</span>
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* <=========slider images========> */}
      <div className="background-slider">
        <Slider {...sliderSettings}>
          {swiperImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="background-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* <=======offer========> */}
      <section className="py-8">
        <div className="text-center p-10">
          <h1 className="font-bold text-4xl mb-4 text-cyan-300">ON OFFER</h1>
        </div>

        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 "
        >
          {onOfferProducts.slice(0, 9).map((product) => (
            <div
              key={product.id}
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <a href="#">
                <img
                  src={`https://skyva-api-1.onrender.com${product.image_url}`}
                  alt={product.name}
                  className="h-80 w-72 object-cover rounded-t-xl"
                  onError={(e) => {
                    console.error("Error loading image:", e);
                  }}
                />

                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Brand: {product.brand}
                  </span>
                  <p className="text-lg font-bold text-black truncate block">
                    Size: {product.size}
                  </p>
                  <p className="text-base font-medium text-gray-500 capitalize">
                    Category: {product.category}
                  </p>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Name: {product.name}
                  </p>
                  {/* <p className="text-sm text-gray-600">
                    Description: {product.description}
                  </p> */}
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      Price: {product.price}
                    </p>
                    {product.previousPrice && (
                      <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">
                          Previous Price: {product.previousPrice}
                        </p>
                      </del>
                    )}
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>

                      <button
                        className="CartBtn mt-4"
                        onClick={() => addToCart(product.id)}
                      >
                        <span className="IconContainer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(17, 17, 17)"
                            className="cart"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"></path>
                          </svg>
                        </span>
                        <span className="ml-2">Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </section>
      </section>
      <section className="hero-section">
        <div className="maps" data-aos="fade-up" data-aos-delay="800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.621694221964!2d39.22974799535693!3d-6.776292510759074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4ffd9443848f%3A0x177d30c63cc6adc6!2sC!5e0!3m2!1sen!2stz!4v1704468258544!5m2!1sen!2stz"
            width="1500"
            height="550"
            // margin-bottom ="20px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Home;
