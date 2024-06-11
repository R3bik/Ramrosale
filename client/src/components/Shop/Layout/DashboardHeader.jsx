import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";

///////////////////////////////////////////////////////////////////////// ADDED FOR TESTING

import styles from "../../../styles/styles";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../../../context/AuthContext";
import { server } from "../../../server";
import { toast } from "react-toastify";
import axios from "axios";
///////////////////////////////////////////////////////////////////////

const DashboardHeader = () => {
  ////////////////////////////////////////////////////////////////////////////// ADDED FOR TESTING

  const { isAuthenticated, user, logout } = useAuth();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${server}/user/logout`);
      toast.success(res.data.message);
      logout();
      navigate("/");
      window.location.reload(true);
    } catch (error) {
      toast.error("Failed to logout. Please try again.");
    }
  };

  // ////////////////////////////////////////////////////////////////////////////

  return (
    <div className="font-Roboto">
      <div className="bg-primary-black text-white h-[80px] flex items-center justify-between px-4">
        <div className="ml-11 mb-2 flex items-center">
          <Link to="/dashboard">
            <h3 className="text-2xl font-bold">
              Ramro<span className="text-[#76ABAE]">Sale</span>
            </h3>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <Link to="/dashboard/coupouns">
              <AiOutlineGift
                color="white"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-events">
              <MdOutlineLocalOffer
                color="white"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-orders">
              <FiShoppingBag
                color="white"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-products">
              <FiPackage
                color="white"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-messages">
              <BiMessageSquareDetail
                color="white"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>

            {/* SELLER KO NAME AAUNU PARYO DASHBOARD MA */}

            {/* <Link to={'/shop/${seller._id}'}>
            <img
              src={'${backend_url}${seller.avatar}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </Link> */}

            {/* ///////////////////////////////////////////TESTING//////////////////////////////////////////// */}

            <div className={`${styles.noramlFlex}`}>
              {isAuthenticated ? (
                <div className="relative cursor-pointer mr-[15px] flex items-center">
                  <Link to="/shop/shophomepage">
                    <span className="ml-2 text-white capitalize font-semibold">
                      {user && user.name}
                    </span>
                  </Link>

                  <button
                    onClick={logoutHandler}
                    className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/shop-login">
                  <CgProfile size={30} />
                </Link>
              )}
            </div>

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
