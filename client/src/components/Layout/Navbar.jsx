import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";

const Navbar = () => {
  return (
    <div className="flex">
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex items-center">
            <Link to={i.url} className="font-[500] px-6 cursor-pointer">
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
