import React from "react";
import styles from "../../styles/styles";
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";

const ShopHomePage = () => {
  return (
    <div className={`bg-[#f5f5f5] min-h-screen`}>
      <div
        className={`${styles.section} w-full flex py-10 justify-between px-4 md:px-8`}
      >
        <div className="w-[25%] bg-white rounded-[4px] shadow-sm overflow-y-scroll h-[90vh] sticky top-2 left-0 z-10">
          <ShopInfo isOwner={true} />
        </div>
        <div className="w-[72%] bg-white rounded-[4px]">
          <ShopProfileData isOwner={true} />
        </div>
      </div>
    </div>
  );
};

export default ShopHomePage;
