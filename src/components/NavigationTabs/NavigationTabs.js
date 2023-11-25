import React from "react";
import { CustomLink } from "../shared/CustomLink/CustomLink";

function NavigationTabs() {
  return (
    <nav className="flex justify-between">
      <CustomLink href="/hierarchy" title="Иерархия" className="" />
      <CustomLink href="/" title="Должности" className="" />
      <CustomLink href="/staff-list" title="Список персонала" className="" />
      <CustomLink href="/equipments" title="Наборы экипировки" className="" />
    </nav>
  );
}

export default NavigationTabs;
