import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import AllProduct from "../../components/Shop/AllProduct";

const ShopAllProducts = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-80 800px:w-330">
          <DashboardSideBar active={3} />
        </div>
        <div className="w-full justify-center flex">
          <AllProduct />
        </div>
      </div>
    </div>
  );
};

export default ShopAllProducts;
