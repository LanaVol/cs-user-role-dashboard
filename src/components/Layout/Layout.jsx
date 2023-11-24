import Link from "next/link";
import React from "react";
import NavigationTabs from "../NavigationTabs/NavigationTabs";

function Layout({ children, className }) {
  return (
    <div className={`${className}`}>
      <div className="bg-dark w-[1034px] h-[836px] px-[25px] pt-6 pb-5 rounded-lg ">
        <NavigationTabs />
        {/* <div className="flex-start gap-8">
        <Link href="/hierarchy">Иерархия</Link>
        <Link href="/">Должности</Link>
        <Link href="/staff-list">Список персонала</Link>
        <Link href="/equipments">Наборы экипировки</Link>
      </div> */}
        {children}
      </div>
    </div>
  );
}

export default Layout;
