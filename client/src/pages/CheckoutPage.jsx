import React from "react";
import Header from "../components/Layout/Header";
// import CheckoutSteps from "../components/Checkout/CheckoutSteps";
// import Checkout from "../components/Checkout/Checkout";
import Checkoutt from "../components/Checkout/Checkoutt";
import Footer from "../components/Layout/Footer";

const CheckoutPage = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      {
        /* <CheckoutSteps active={1} />
      <Checkout /> */
        <Checkoutt />
      }
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
