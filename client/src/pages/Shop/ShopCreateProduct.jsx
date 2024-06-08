import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import CreateProduct from "../../components/Shop/CreateProduct"


const ShopCreateProduct = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-80 800px:w-330">
          <DashboardSideBar active={4} />
        </div>
        <div className="w-full justify-center flex">
          <CreateProduct />
        </div>
      </div>
    </div>
  );
};

export default ShopCreateProduct;
