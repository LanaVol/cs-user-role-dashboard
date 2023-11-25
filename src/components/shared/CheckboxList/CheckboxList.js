import React from "react";
import CheckboxItem from "../CheckboxItem/CheckboxItem";

function CheckboxList({ name, dutiesItems }) {
  return (
    <div className=" bg-dark ">
      <h4 className="text-xs leading-[18px] font-medium text-secondary mb-1">
        {name}
      </h4>
      <ul className="flex flex-col gap-2">
        {dutiesItems?.map((el) => (
          <CheckboxItem label={el} key={el} />
        ))}
      </ul>
    </div>
  );
}

export default CheckboxList;
