import React, { useState } from "react";
import { toast } from "react-toastify";

const Payment = ({ totalAmount, handlePayment }) => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === "creditCard") {
      // Validate payment details before submitting
      if (validatePaymentDetails(paymentDetails)) {
        handlePayment(paymentMethod);
      } else {
        toast.error("Please fill in all payment details correctly.");
      }
    } else {
      handlePayment(paymentMethod);
    }
  };

  const validatePaymentDetails = (details) => {
    const cardNumberRegex = /^\d{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    const cvvRegex = /^[0-9]{3,4}$/;

    return (
      cardNumberRegex.test(details.cardNumber) &&
      expiryDateRegex.test(details.expiryDate) &&
      cvvRegex.test(details.cvv)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none"
          >
            <option value="creditCard">Credit Card</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>

        {paymentMethod === "creditCard" && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter card number"
                maxLength="16"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={paymentDetails.expiryDate}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none"
                  placeholder="MM/YY"
                  maxLength="5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={paymentDetails.cvv}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none"
                  placeholder="CVV"
                  maxLength="4"
                />
              </div>
            </div>
          </>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-md"
        >
          {totalAmount ? `Pay $${totalAmount.toFixed(2)}` : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default Payment;
