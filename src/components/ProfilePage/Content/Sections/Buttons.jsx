import React from "react";

function Buttons() {
  return (
    <div className="mt-9 py-5 flex flex-wrap justify-between border-t-2 border-t-[#EDEEF2]">
      <div className="border-[#FF5C60] border-2 rounded-lg text-center text-[#FF5C60] w-full lg:w-auto py-3 px-4 font-bold cursor-pointer">
        Log out
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5 w-full lg:mt-0 lg:w-auto">
        <div className="border-[#83859C] border-2 text-center rounded-lg text-[#83859C] py-3 px-4 font-bold cursor-pointer">
          Discard changes
        </div>
        <div className="bg-[#4E60FF] border-2 rounded-lg text-center text-[#FFF] py-3 px-4 font-bold cursor-pointer">
          Save changes
        </div>
      </div>
    </div>
  );
}

export default Buttons;
