import { Button } from "@mui/material";
import React from "react";
import Avatar from "./Sections/Avatar";
import Information from "./Sections/Information";
import Notification from "./Sections/Notification";
import Buttons from "./Sections/Buttons";

function ProfileContent() {
  return (
    <div>
      <h2 className="font-semibold text-xl">Account</h2>
      <div className="mt-4 border-2 border-[#EDEEF2] rounded-2xl py-6 px-4">
        <h2 className="text-lg font-bold">Personal information</h2>
        <Avatar />
        <Information />
        <Notification />
        <Buttons />
      </div>
    </div>
  );
}

export default ProfileContent;
