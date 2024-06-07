import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
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

        {/* Other elements of the DashboardHeader */}
        {/* Add your other elements here */}
      </div>
    </div>
  );
};

export default DashboardHeader;
