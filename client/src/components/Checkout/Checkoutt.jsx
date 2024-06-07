import React, { useState } from "react";
import { toast } from "react-toastify";
import Payment from "../Payment/Payment";

const Checkoutt = ({ cartData = [], totalItems, totalPrice }) => {
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    email: "",
    country: "Nepal",
    city: "", // Update default city to empty string
    zipCode: "",
    phoneNumber: "",
    address: "",
  });
  const [showPayment, setShowPayment] = useState(false);

  // Function to handle input changes in shipping details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  // Function to validate shipping details form
  const validateForm = () => {
    const { fullName, email, city, zipCode, phoneNumber, address } =
      shippingDetails;
    if (!fullName || !email || !city || !zipCode || !phoneNumber || !address) {
      toast.error("Please fill out all fields.");
      return false;
    }
    return true;
  };

  // Function to handle checkout process
  const handleCheckout = () => {
    if (validateForm()) {
      setShowPayment(true);
    }
  };

  // Function to handle payment process
  const handlePayment = (paymentMethod) => {
    // Handle payment logic based on payment method
    if (paymentMethod === "creditCard") {
      toast.success("Payment successful!");
    } else if (paymentMethod === "cod") {
      toast.success("Order placed successfully! Please pay upon delivery.");
    }
    setShowPayment(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {!showPayment ? (
        <>
          {/* Shipping Details Form */}
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Shipping Details Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
              {/* Input fields for shipping details */}
              {[
                { label: "Full Name", name: "fullName", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Address", name: "address", type: "text" },
                {
                  label: "Country",
                  name: "country",
                  type: "text",
                  readOnly: true,
                },
                // Update City input field to a dropdown
                { label: "City", name: "city", type: "select" }, // Change type to "select"
                { label: "Zip Code", name: "zipCode", type: "text" },
                { label: "Phone Number", name: "phoneNumber", type: "tel" },
              ].map(({ label, name, type, readOnly = false }) => (
                <div className="mb-4" key={name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  {/* Render select dropdown for City */}
                  {type === "select" ? (
                    <select
                      name={name}
                      value={shippingDetails[name] || ""}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none"
                    >
                      <option value="">Select City</option>
                      <option value="Pokhara">Pokhara</option>
                      <option value="Kathmandu">Kathmandu</option>
                      <option value="Bhaktapur">Bhaktapur</option>
                    </select>
                  ) : (
                    // Render input field for other types
                    <input
                      type={type}
                      name={name}
                      value={shippingDetails[name] || ""}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none"
                      readOnly={readOnly}
                    />
                  )}
                </div>
              ))}
            </div>
            {/* Order Summary Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              {/* Display cart items and total */}
              <div className="mb-4">
                {cartData.map((item, index) => (
                  <div key={index} className="flex justify-between mb-2">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>${item.price * item.quantity}</span>
                  </div>
                ))}
                {/* Total price */}
                <div className="flex justify-between font-semibold mt-4">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Checkout button */}
          <button
            onClick={handleCheckout}
            className="h-[45px] flex items-center justify-center w-full bg-[#e44343] rounded-[5px]"
          >
            <h1 className="text-white text-lg font-semibold">Payment</h1>
          </button>
        </>
      ) : (
        // Payment Component
        <Payment totalAmount={totalPrice} handlePayment={handlePayment} />
      )}
    </div>
  );
};

export default Checkoutt;
