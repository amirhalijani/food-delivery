import React from "react";
import ShopIcon from "@mui/icons-material/LocalMallOutlined";
import Time from "@mui/icons-material/AccessTimeRounded";

const ResturantCard = ({
  banner,
  name,
  mintime,
  maxtime,
  price,
  categoryname,
  categoryicon,
  featured,
}) => {
  return (
    <div className="rounded-2xl border-2 border-[#EDEEF2] overflow-hidden relative cursor-pointer hover:bg-[#e7e7e7] hover:border-[#697BFF]">
      {/* Banner */}
      <div>
        <img src={banner} alt="banner" className="w-full h-auto" />
      </div>
      {/* Featured */}
      {featured ? (
        <div className="py-2 px-4 bg-[#4E60FF] rounded-bl-2xl absolute top-0 right-0">
          <h2 className="font-bold text-xs text-[#fff]">Featured</h2>
        </div>
      ) : null}
      {/* Text */}
      <div className="px-4">
        {/* Food Name */}
        <div className="mt-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">{name}</h2>
          <ShopIcon className="text-[#C7C8D2]" />
        </div>
        {/* Time & Price */}
        <div className="mt-2 text-xs text-[#83859C] flex items-center font-semibold">
          <Time className="text-[#C7C8D2] w-full h-auto" />
          <h2 className="px-2">
            {mintime}-{maxtime} min
          </h2>
          <div className="w-1 h-1 rounded-full bg-[#4E60FF]"></div>
          <h2 className="px-2">${price} min sum</h2>
        </div>
        {/* Category */}
        <div className="flex my-4">
          <div className="px-2 py-1 mr-2 rounded-[100px] bg-[#EDEEF2] text-[#545563] flex">
            <img className="w-3 mr-2" src={categoryicon} />
            <h2 className="text-xs font-semibold">{categoryname}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
