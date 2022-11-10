import React from "react";

const ProfileSideCard = ({ icon, title, details }) => {
  return (
    <div className="bg-[#F3F4FF] border-2 border-[#4E60FF] rounded-2xl flex items-center cursor-pointer my-4">
      <div className="w-10 h-10 rounded-xl bg-[#4E60FF] p-3 ml-4">
        <img src={icon} alt="icon"/>
      </div>
      <div className="flex flex-col m-4">
        <h2 className="font-bold">{title}</h2>
        <h2 className="text-[#545563]">{details}</h2>
      </div>
    </div>
  );
};

export default ProfileSideCard;
