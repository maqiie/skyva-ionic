import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Shoes.css";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";

const Shoes = () => {
  const [products, setProducts] = useState([]);
  const [cartId, setCartId] = useState(null);



 const addToCart = async (productId) => {
    console.log("Product ID:", productId); // Log the productId value
    try {
      await axios.post(`https://skyva-api-1.onrender.com/carts/${cartId}/add_to_cart`, {
        product_id: productId,
        quantity: 2,
      });
      console.log("Item added to cart successfully");
      toast.success("Item added to cart successfully"); // Show success toast
    } catch (error) {
      console.error("Error adding item to cart:", error.response.data);
      toast.error("Error adding item to cart"); // Show error toast
    }
  };
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const categoryId = 1; // Hardcoded category ID for shoes
        const response = await axios.get(
          `https://skyva-api-1.onrender.com/categories/${categoryId}/products`
        );
        console.log("Products fetched successfully:", response.data);

        // Extracting image URLs from the response data
        const productsWithImages = response.data.map((product) => ({
          ...product,
          imageUrl: product.image_url
            ? `https://skyva-api-1.onrender.com${product.image_url}`
            : null,
        }));

        // Log the products with image URLs
        console.log("Products with image URLs:", productsWithImages);

        // Set the state with the fetched product data
        setProducts(productsWithImages);
      } catch (error) {
        console.error("Error fetching products by category:", error);
      }
    };

    fetchProductsByCategory();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-900 mt-2">
        Shoes
      </h2>

      {/* <h2 className="text-2xl font-bold text-cyan-900 mb-4 text-center">Products in Category Shoes</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg"
            key={product.id}
          >
            <div className="relative">
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold text-black mb-2">
                {product.name}
              </p>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-bold text-black">${product.price}</p>
                <button class="CartBtn"
                                onClick={() => addToCart(product.id)}
                                >
                  <span class="IconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      fill="rgb(17, 17, 17)"
                      class="cart"
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </span>
                  <p class="text">Add to Cart</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Shoes;
