import React from "react";
import NavigationTabs from "../../shared/NavigationTabs/NavigationTabs";

function Layout({ children, className }) {
  return (
    <div className={`${className} flex justify-center items-center`}>
      <div className="bg-dark w-[1034px] h-[836px] px-[25px] pt-6 pb-5 rounded-lg">
        <NavigationTabs />
        {children}
      </div>
    </div>
  );
}

export default Layout;
