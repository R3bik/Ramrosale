import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative min-h-[80vh]  bg-no-repeat w-full flex items-center "
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" mx-auto w-[60%]">
        <h1 className="text-[60px] leading-[1.2] font-[600] capitalize">
          Check out our <br />
          Collections
        </h1>
        <p className="pt-5 w-[60%] text-[16px] font-Poppins font-[400] text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          voluptates, earum eligendi commodi tenetur quos ex, perferendis
          dolores, assumenda autem provident aliquid ipsa tempora! Excepturi
          voluptate soluta a corporis distinctio.
        </p>
        <Link to="/products">
          <div className="mt-5 w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer hover:bg-third transition-all">
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
