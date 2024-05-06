import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { categoriesData, productData } from "../../static/data";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import styles from "../../styles/styles";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const { isAuthenticated, user } = useSelector((state) => state.user);

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

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts || []);
    setShowDropdown(true);
  };

  return (
    <div className="font-Roboto">
      <div className="bg-primary-black text-white h-[70px]">
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
            {showDropdown && searchData && searchData.length !== 0 && (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={() => setShowDropdown(false)} // Close dropdown when item clicked
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
            <Link to="">
              <h1 className="text-gray-800 flex items-center  font-semibold">
                Become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      {/*  navbar */}
      <div className="bg-secondary-black text-white h-[60px]  w-full  flex items-center">
        <div className="flex items-center justify-between w-11/12 mx-auto">
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px]  w-[270px] hidden 1000px:block text-black ">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className="flex items-center ">
            <Navbar />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-red-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {/* {wishlist && wishlist.length} */}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-green-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {/* {cart && cart.length} */}
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.noramlFlex}`}>
            <div className="relative cursor-pointer mr-[15px]">
              {isAuthenticated ? (
                <Link to="/profile">
                  <img
                    src={`${user?.avatar?.url}`}
                    className="w-[35px] h-[35px] rounded-full"
                    alt=""
                  />
                </Link>
              ) : (
                <Link to="/login">
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
