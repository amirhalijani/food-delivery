import React from "react";
import CupCake from "../../../assets/cupcake.png";
import BigBurger from "../../../assets/bigburger.png";

const HomeHeader = () => {
  return (
    <div className=" grid grid-cols-12 gap-x-5 my-5">
      <div className="flex items-center col-span-12 lg:col-span-6 rounded-2xl bg-[#F3F4FF] overflow-hidden">
        <div className="self-end">
          <img className="w-[18rem]" src={CupCake} />
        </div>
        <div className="hidden lg:block px-4">
          <h2 className="text-xl font-semibold">All deserts</h2>
          <h2 className="text-5xl mt-2 font-extrabold text-[#4E60FF]">
            20% Off
          </h2>
          <h2 className="text-sm font-normal mt-9 text-[#83859C]">Deserty</h2>
        </div>
      </div>

      <div className="flex flex-col items-center col-span-12 lg:flex-row lg:col-span-6 px-4 lg:px-6 rounded-2xl bg-[#FFF3ED]">
        <div className="lg:hidden w-full py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Big Burgers</h2>
            <h2 className="text-sm font-normal text-[#83859C]">Foodies</h2>
          </div>
          <div className="py-2">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#FD6D22]">
              50% Off
            </h2>
          </div>
        </div>

        <div className="self-end">
          <img className="w-[18rem]" src={BigBurger} />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
{
  /* <div className="hidden lg:block px-4">
          <h2 className="text-xl font-semibold">Big Burgers</h2>
          <h2 className="text-5xl mt-2 font-extrabold text-[#FD6D22]">
            50% Off
          </h2>
          <h2 className="text-sm font-normal mt-9 text-[#83859C]">Foodies</h2>
        </div> */
}
