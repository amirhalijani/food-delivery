import React from "react";
import LoginHeader from "./LoginHeader";
import LoginMain from "./LoginMain";
import LoginFooter from "./LoginFooter";

const LoginRight = () => {
  return (
    <div className="w-2/4">
      <div className="container h-screen w-3/4 mx-auto p-5 flex flex-col justify-between">
        <LoginHeader />
        <LoginMain />
        <LoginFooter />
      </div>
    </div>
  );
};

export default LoginRight;
