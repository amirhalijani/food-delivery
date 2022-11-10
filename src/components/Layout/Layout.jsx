import React from "react";
import Navbar from "./Navbar";

export default function Layout({children}) {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-[10.rem] w-full">
      <Navbar />
      {children}
    </div>
  );
}
