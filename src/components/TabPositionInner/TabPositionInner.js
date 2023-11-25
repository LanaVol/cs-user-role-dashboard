import React from "react";
import ListPosition from "../ListPosition/ListPosition";
import Button from "../shared/Button/Button";
import MenuPosition from "../MenuPosition/MenuPosition";

function TabPositionInner() {
  return (
    <div className="max-w-[984px] h-auto flex-start items-start gap-4 rounded-b-lg bg-dark border-2 border-light8 p-10 pt-[27px]">
      <div className="max-w-[296px]">
        <ListPosition />
        <Button text="Создать новую должность" />
      </div>
      <MenuPosition />
    </div>
  );
}

export default TabPositionInner;
