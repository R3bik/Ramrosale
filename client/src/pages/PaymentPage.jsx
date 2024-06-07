import React from "react";
import Header from "../components/Layout/Header";
// import CheckoutSteps from "../components/Checkout/CheckoutSteps";
// import Checkout from "../components/Checkout/Checkout";
import Payment from "../components/Payment/Payment";
import Footer from "../components/Layout/Footer";

const PaymentPage = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      {
        /* <CheckoutSteps active={1} />
      <Checkout /> */
        <Payment />
      }
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default PaymentPage;
