
import React, { useState } from 'react';
import { PaystackButton } from "react-paystack";
import "./Checkout.css";

const CheckoutForm = ({ totalPrice }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const publicKey = "pk_live_574f424cafe4f0b7c6df5f678520ad393e4d09fd"; // Replace with your actual public key
  const currency = "KES"; // Currency

  const handlePaymentSuccess = () => {
    alert("Thanks for doing business with us! Come back soon!!");
  };

  const handlePaymentClose = () => {
    alert("Wait! You need this oil, don't go!!!!");
  };

  const componentProps = {
    email,
    amount: totalPrice * 100, // Convert totalPrice to smallest currency unit (e.g., cents)
    currency,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: handlePaymentSuccess,
    onClose: handlePaymentClose,
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Complete Your Purchase</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            className="input-field"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            className="input-field"
            placeholder="johndoe@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="input-field"
            placeholder="1234567890"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <PaystackButton
          className="bg-blue-500 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          {...componentProps}
        />
      </div>
    </div>
  );
};

export default CheckoutForm;
