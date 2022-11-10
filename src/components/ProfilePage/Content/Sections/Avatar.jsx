import React from "react";
import ProfileImage from "../../../../assets/Profile.jpg";

function Avatar() {
  return (
    <div className="mt-4">
      <h2 className="font-semibold text-xs text-[#545563]">Avatar</h2>
      <div className="flex items-center">
        <div className="mt-2 w-[88px] h-[88px] rounded-xl overflow-hidden">
          <img src={ProfileImage} className="w-full h-full object-cover" />
        </div>
        <div className="py-3 px-4 mx-6 rounded-lg border-[#4E60FF] border-2 text-[#4E60FF] font-bold text-sm cursor-pointer">
          Change
        </div>
        <h2 className="text-sm font-bold text-[#83859C]">Remove</h2>
      </div>
    </div>
  );
}

export default Avatar;
