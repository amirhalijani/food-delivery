import React from "react";

const LoginMain = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-bold mb-5">Login</h1>
      <h4 className="mb-10">
        Sign in with your data that you entered during your registration.
      </h4>

      <div className="mb-8">
        <h3 className="text-[#a1a1a1]">Email</h3>
        <input
          type="email"
          placeholder="name@example.com"
          className="w-full outline-none border-solid border-2 border-[#C7C8D2] rounded-[8px] bg-transparent p-2"
        />
      </div>

      <div className="mb-8">
        <h3 className="text-[#a1a1a1]">Password</h3>
        <input
          type="email"
          placeholder="min. 8 characters"
          className="w-full outline-none border-solid border-2 border-[#C7C8D2] rounded-[8px] bg-transparent p-2"
        />
      </div>

      <div className="flex w-full items-center font-semibold mb-10">
        <input type="checkbox" name="logged-in" id="logged-in" />
        <h3 className="ml-2">Keep me logged in</h3>
      </div>

      <div className="flex flex-col items-center">
        <button className="w-full bg-[#4E60FF] mb-8 p-3 rounded-[8px] text-white font-semibold text-[18px]">
          Login
        </button>
        <h3 className="text-[#4E60FF] font-semibold text-[16px] cursor-pointer">
          Forgot password
        </h3>
      </div>
    </div>
  );
};

export default LoginMain;
