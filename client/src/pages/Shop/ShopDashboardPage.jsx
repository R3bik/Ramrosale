import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";

const ShopDashboardPage = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-80 800px:w-330">
          <DashboardSideBar active={1} />
        </div>
      </div>
    </div>
  );
};

export default ShopDashboardPage;
