import React from "react";
import ShopIcon from "@mui/icons-material/LocalMallOutlined";
import MenuIcon from "@mui/icons-material/MenuRounded";
import ProfileImage from "../../../assets/Profile.jpg";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between py-5 border-b-2 border-[#EDEEF2]">
        <div
          id="logo"
          className="flex flex-col items-start justify-center leading-7 w-2/6"
        >
          <h2 className="text-xl font-extrabold">Food</h2>
          <h2 className="text-xl text-[#4E60FF] font-black">delivery</h2>
        </div>

        <div className="flex items-center">
          <div className="hidden mx-2 lg:flex lg:items-center lg:font-bold lg:text-sm">
            <h3 className="mx-7">Resturants</h3>
            <h3>Deals</h3>
            <div className="w-0.5 h-8 mx-5 bg-[#EDEEF2]"></div>
            <h3>My orders</h3>
          </div>

          <div className="hidden mx-4 sm:flex items-center justify-center bg-[#F3F4FF] rounded-2xl p-3.5">
            <ShopIcon className="text-[#4E60FF]" />
          </div>
          <Link to="/profile">
            <div className="flex items-center justify-center bg-[#F3F4FF] rounded-2xl w-12 h-12 overflow-hidden ring ring-[#EDEEF2] ring-offset-2">
              <img src={ProfileImage} className="w-full h-full object-cover" />
            </div>
          </Link>
          <div className="w-0.5 h-8 mx-4 bg-[#EDEEF2] lg:hidden"></div>

          <div className="lg:hidden flex items-center justify-center bg-[#EDEEF2] rounded-2xl p-3.5">
            <MenuIcon className="text-[#83859C]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNavbar;
