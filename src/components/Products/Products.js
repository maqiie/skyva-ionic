


import React, { Component } from "react";
import axios from "axios"; // Import Axios
import "./Products.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], // Initialize products state
      loading: true, // Optional loading state
      favorites: {}, // Keep track of favorite products
    };
  }

  componentDidMount() {
    // Fetch products when the component mounts
    axios
      .get("https://skyva-api-1.onrender.com/products")
      .then((response) => {
        this.setState({
          products: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        this.setState({ loading: false });
      });
  }

  toggleFavorite = (productId) => {
    this.setState((prevState) => ({
      favorites: {
        ...prevState.favorites,
        [productId]: !prevState.favorites[productId],
      },
    }), () => {
      // Call backend API to add/remove product from favorites
      // You can use axios here to make a POST request to your backend API
      // Pass the productId and the current favorite status to your API
    });
  };

  render() {
    const { products, loading, favorites } = this.state;

    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <section className="py-8 sm:py-12 bg-white">
            <div className="mx-auto max-w-screen-xl px-4 w-full">
              <h2 className="mb-4 font-bold text-xl text-gray-900">Trending</h2>
              <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
                  >
                    <div className="h-44 overflow-hidden relative">
                      <a href="#">
                        <img
                          src={`https://skyva-api-1.onrender.com${product.image_url}`}
                          alt={product.name}
                          className="h-full w-full object-cover rounded-t-xl"
                          onError={(e) => {
                            console.error("Error loading image:", e);
                          }}
                        />
                      </a>
                      {/* Love icon for adding to favorites */}
                      <div className="love">
                        <input
                          id={`switch-${product.id}`}
                          type="checkbox"
                          checked={favorites[product.id]}
                          onChange={() => this.toggleFavorite(product.id)}
                        />
                        <label className="love-heart" htmlFor={`switch-${product.id}`}>
                          <i className="left"></i>
                          <i className="right"></i>
                          <i className="bottom"></i>
                          <div className="round"></div>
                        </label>
                      </div>
                    </div>

                    <div className="bg-white py-4 px-3">
                      <div className="flex justify-between items-center">
                        <button className="CartBtn">
                          <span className="IconContainer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 576 512"
                              fill="rgb(17, 17, 17)"
                              className="cart"
                            >
                              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                            </svg>
                          </span>
                          <p className="text">Add to Cart</p>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default Products;
