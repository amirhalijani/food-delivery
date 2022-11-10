import React from "react";
import ProfileSideCard from "./ProfileSideCard";
import PersonIcon from "@mui/icons-material/Person";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const ProfileSide = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl">Setting</h2>
      <div>
        <ProfileSideCard
          title="Account"
          details="Personal information"
          icon={PersonIcon}
        />
        <ProfileSideCard
          title="Address"
          details="Shippings addresses"
          className="my-3"
          icon={FmdGoodOutlinedIcon}
        />
        <ProfileSideCard
          title="Payment method"
          details="Connected credit card"
        />
        <ProfileSideCard title="Security" details="Password, 2FA" />
      </div>
    </div>
  );
};

export default ProfileSide;
