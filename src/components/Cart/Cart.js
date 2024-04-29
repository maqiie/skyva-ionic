
import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import CheckoutForm from "./Checkout";


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      orderItems: [],
    };
  }

  componentDidMount() {
    if (this.props.currentUser) {
      const userId = this.props.currentUser.id;
      const backendEndpoint = `https://skyva-api-1.onrender.com/carts/${userId}/get_cart`;

      axios
        .get(backendEndpoint)
        .then((response) => {
          const { cart, order_items } = response.data;
          this.setState({ cart, orderItems: order_items });
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
        });
    } else {
      console.error("No currentUser found in props.");
    }
  }

  handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      this.removeItemFromCart(itemId);
    } else {
      this.setState((prevState) => ({
        orderItems: prevState.orderItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        ),
      }));
    }
  };

  removeItemFromCart = (orderItemId) => {
    axios
      .delete(
        `https://skyva-api-1.onrender.com/carts/${this.props.currentUser.id}/remove_item/${orderItemId}`
      )
      .then((response) => {
        this.setState((prevState) => ({
          orderItems: prevState.orderItems.filter(
            (item) => item.id !== orderItemId
          ),
        }));
        toast.success("Item removed from cart successfully", {
          className: "toast-success",
        });
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
        toast.error("Error removing item from cart", {
          className: "toast-error",
        });
      });
  };

  clearCart = () => {
    axios
      .delete(
        `https://skyva-api-1.onrender.com/carts/${this.props.currentUser.id}/clear_cart`
      )
      .then(() => {
        this.setState({ orderItems: [] });
        toast.success("Cart cleared successfully");
      })
      .catch((error) => {
        console.error("Error clearing cart:", error);
        toast.error("Error clearing cart");
      });
  };

  calculateTotal = () => {
    return this.state.orderItems.reduce(
      (total, item) => total + parseFloat(item.product.price) * item.quantity,
      0
    );
  };

  addQuantity = (orderItemId, quantityChange) => {
    const userId = this.props.currentUser.id;

    axios
      .patch(
        `https://skyva-api-1.onrender.com/carts/${userId}/add_quantity/${orderItemId}`,
        {
          quantity: quantityChange,
        }
      )
      .then(() => {
        const updatedOrderItems = this.state.orderItems.map((item) =>
          item.orderItemId === orderItemId
            ? { ...item, quantity: item.quantity + quantityChange }
            : item
        );
        this.setState({ orderItems: updatedOrderItems });
        toast.success("Quantity updated successfully", {
          className: "toast-success",
        });
      })
      .catch((error) => {
        console.error("Error adding quantity:", error);
        toast.error("Error adding quantity", {
          className: "toast-error",
        });
      });
  };

  render() {
    const { orderItems } = this.state;
    const totalPrice = this.calculateTotal(); // Calculate total price


    return (
      <div className="container mx-auto px-4 py-8 border border-white">
        <h2 className="text-2xl font-bold mb-4 text-black">Shopping Cart</h2>
        <ul className="divide-y divide-gray-200">
          {orderItems.map((item) => (
            <li key={item.id} className="flex py-4">
              <div className="flex-none w-16 h-16 mr-4">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-cyan-300">{item.product.name}</p>
                <p className="text-gray-600">${item.product.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => {
                      const newQuantity = item.quantity - 1;
                      if (newQuantity >= 0) {
                        this.handleQuantityChange(item.id, newQuantity);
                        this.addQuantity(item.id, -1);
                      }
                    }}
                    className="text-gray-600 px-3 py-1 rounded-full border border-gray-400"
                  >
                    -
                  </button>
                  <span className="mx-2 text-black">{item.quantity}</span>
                  <button
                    onClick={() => {
                      this.handleQuantityChange(item.id, item.quantity + 1);
                      this.addQuantity(item.id, 1);
                    }}
                    className="text-gray-600 px-3 py-1 rounded-full border border-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="text-red-500 ml-4"
                onClick={() => this.removeItemFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-8">
          <div>
            <span className="font-semibold text-cyan-300">Total:</span>
            <span className="ml-2 font-bold text-black ">
              ${this.calculateTotal().toFixed(2)}
            </span>
          </div>
          {/* <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded">
            Checkout
          </Link> */}
        </div>
        <div className="mt-8">
          <Link to="/" className="text-blue-500 flex items-center transition duration-300 hover:text-blue-700 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span>Continue Shopping</span>
          </Link>
        </div>
        <CheckoutForm totalPrice={totalPrice} />

        <ToastContainer />
      </div>
    );
  }
}

export default Cart;
