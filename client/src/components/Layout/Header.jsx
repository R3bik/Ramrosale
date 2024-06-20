import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { categoriesData, productData } from "../../static/data";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import styles from "../../styles/styles";
import { useAuth } from "../../context/AuthContext";
import { CgProfile } from "react-icons/cg";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { server } from "../../server";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

const Header = ({activeHeading}) => {
  const { cart } = useSelector((state) => state.cart);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const { isAuthenticated, user, logout } = useAuth();

  const [openCart, setOpencart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);

  const navigate = useNavigate(); // Correctly use useNavigate hook

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
    setShowDropdown(true);
  };

  return (
    <div className="font-Roboto">
      <div className="bg-primary-black text-white h-[80px]">
        <div className="flex items-center justify-between w-11/12 mx-auto">
          {/* logo */}
          <Link to="/">
            <h3 className="text-2xl font-bold">
              Ramro<span className="text-[#76ABAE]">Sale</span>
            </h3>
          </Link>

          {/* search-box */}
          <div className="w-[50%] relative" ref={dropdownRef}>
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 rounded-md text-black"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer text-black"
            />
            {showDropdown && searchData.length > 0 && (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData.map((product) => (
                  <Link
                    key={product.name}
                    to={`/product/${product.name}`}
                    onClick={() => setShowDropdown(false)}
                  >
                    <div className="w-full flex items-start py-3">
                      <img
                        src={product.image_Url[0].url}
                        alt=""
                        className="h-[40px] w[40px] mr-[10px]"
                      />
                      <h1 className="text-black">{product.name}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* seller or not */}
          <div className="w-[150px] bg-third h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer">
            <Link to="/shop-create">
              <h1 className="text-gray-800 flex items-center  font-semibold">
                Become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="bg-secondary-black text-white h-[70px] w-full flex items-center">
        <div className="flex items-center justify-between w-11/12 mx-auto">
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[70px] w-[270px] hidden 1000px:block text-black">
              <BiMenuAltLeft size={40} className="absolute top-3 left-2 pr-1" />
              <button className="h-[100%] w-full flex justify-between items-center pl-12 bg-white font-sans text-lg font-[500] select-none rounded-t-md">
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-6 cursor-pointer"
              />
              {dropDown && (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              )}
            </div>
          </div>
          {/* navitems */}
          <div className="flex items-center text-lg">
            <Navbar />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => {
                  setOpenWishlist(true);
                }}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-red-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {/* {wishlist && wishlist.length} */}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpencart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-green-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.noramlFlex}`}>
            {isAuthenticated ? (
              <div className="relative cursor-pointer mr-[15px] flex items-center">
                <Link to="/profile">
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
              <Link to="/login">
                <CgProfile size={30} />
              </Link>
            )}
          </div>
        </div>
        {/* cart popup */}
        {openCart ? <Cart setOpenCart={setOpencart} /> : null}

        {/* wishlist popup */}
        {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
      </div>
    </div>
  );
};

export default Header;
