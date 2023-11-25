import Link from "next/link";
import React from "react";
import NavigationTabs from "../NavigationTabs/NavigationTabs";

function Layout({ children, className }) {
  return (
    <div className={`${className}`}>
      <div className="bg-dark w-[1034px] h-[836px] px-[25px] pt-6 pb-5 rounded-lg ">
        <NavigationTabs />
        {children}
      </div>
    </div>
  );
}

export default Layout;
