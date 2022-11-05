import React from "react";

const CategoryItem = ({ title, icon }) => {
  return (
    <div className="cursor-pointer hover:bg-[#F8F9FF] hover:border-[#697BFF] border-2 border-[#EDEEF2] rounded-2xl flex flex-col items-center">
      <img className="w-6 my-3" src={icon} />
      <h2 className="font-bold text-sm text-[#545563] mb-2">{title}</h2>
    </div>
  );
};

export default CategoryItem;
