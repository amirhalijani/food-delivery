import React from "react";
import LoginRight from "./LoginRight";
import LoginLeft from "./LoginSidebar";

const login = () => {
  return (
    <div className="mx-auto w-screen h-screen flex">
      <LoginRight />
      <LoginLeft className="md:hidden" />
    </div>
  );
};

export default login;
