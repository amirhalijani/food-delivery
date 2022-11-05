import React from "react";
import HomeNavbar from "../HomePage/Navbar/HomeNavbar";

export default function Layout({children}) {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-[10.313rem] w-full">
      <HomeNavbar />
      {children}
    </div>
  );
}
