import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeatureProduct from "../components/Route/FeaturedProduct/FeatureProduct";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div className="bg-[#EEEEEE] min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <BestDeals />
      <FeatureProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
