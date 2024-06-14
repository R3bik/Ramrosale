import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const DashboardSideBar = ({ active }) => {
  //   const active = 1;

  return (
    <div className="w-full h-[89vh] bg-secondary-black shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      {/* single item */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            color={`${active === 1 ? "#76ABAE" : "white"}`}
          />
          <h5
            className={`pl-2 font-sans text-lg font-[400] ${
              active === 1 ? "text-[#76ABAE]" : "text-white"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "#76ABAE" : "white"}`}
          />
          <h5
            className={`pl-2 font-sans text-lg font-[400] ${
              active === 2 ? "text-[#76ABAE]" : "text-white"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <FiPackage
            size={30}
            color={`${active === 3 ? "#76ABAE" : "white"}`}
          />
          <h5
            className={`pl-2 font-sans text-lg font-[400] ${
              active === 3 ? "text-[#76ABAE]" : "text-white"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-create-product"
          className="w-full flex items-center"
        >
          <AiOutlineFolderAdd
            size={30}
            color={`${active === 4 ? "#76ABAE" : "white"}`}
          />
          <h5
            className={`pl-2 font-sans text-lg font-[400] ${
              active === 4 ? "text-[#76ABAE]" : "text-white"
            }`}
          >
            Create Products
          </h5>
        </Link>
      </div>
{/* 
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 5 ? "#76ABAE" : "white"}`}
          />
          <h5
            className={`pl-2 font-sans text-lg font-[400] ${
              active === 5 ? "text-[#76ABAE]" : "text-white"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-create-events"
          className="w-full flex items-center"
        >
          <VscNewFile
            size={30}
            color={`${active === 6 ? "#76ABAE" : "white"}`}
          />
          <h5
            className={`pl-2 font-sans text-lg font-[400] ${
              active === 6 ? "text-[#76ABAE]" : "text-white"
            }`}
          >
            Create Events
          </h5>
        </Link>
      </div> */}

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-withdraw-money"
          className="w-full flex items-center"
        >
          <CiMoneyBill
            size={30}
            color={`${active === 7 ? "#76ABAE" : "white"}`}
          />
          <h5
            className={`pl-2 font-sans text-lg font-[400] ${
              active === 7 ? "text-[#76ABAE]" : "text-white"
            }`}
          >
            Withdraw Money
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <BiMessageSquareDetail
            size={30}
            color={`${active === 8 ? "#76ABAE" : "white"}`}
          />
          <h5
            className={`pl-2 font-sans text-lg font-[400] ${
              active === 8 ? "text-[#76ABAE]" : "text-white"
            }`}
          >
            Shop Inbox
          </h5>
        </Link>
      </div>
{/* 
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard/coupouns" className="w-full flex items-center">
          <AiOutlineGift
            size={30}
            color={`${active === 9 ? "#76ABAE" : "white"}`}
          />
          <h5
            className={`pl-2 font-sans text-lg font-[400] ${
              active === 9 ? "text-[#76ABAE]" : "text-white"
            }`}
          >
            Discount Codes
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <HiOutlineReceiptRefund
            size={30}
            color={`${active === 10 ? "#76ABAE" : "white"}`}
          />
          <h5
            className={`pl-2 font-sans text-lg font-[400] ${
              active === 10 ? "text-[#76ABAE]" : "text-white"
            }`}
          >
            Refunds
          </h5>
        </Link>
      </div> */}

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-settings" className="w-full flex items-center">
          <CiSettings
            size={30}
            color={`${active === 11 ? "#76ABAE" : "white"}`}
          />
          <h5
            className={`pl-2 font-sans text-lg font-[400] ${
              active === 11 ? "text-[#76ABAE]" : "text-white"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
