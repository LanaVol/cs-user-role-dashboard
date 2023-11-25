import React, { useState } from "react";
import { SvgAgreeIcon } from "../Icons";

function CheckboxItem({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e) => {
    console.log(e.target.checked);
    if (!isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <li className="flex-start">
      <input
        type="checkbox"
        id={label}
        className="hidden checkbox"
        onChange={handleClick}
        checked={isChecked}
      />
      <label
        htmlFor={label}
        className="flex-start gap-2 text-xs font-medium text-light"
      >
        <span className={`checkflag flex justify-center items-center`}>
          {isChecked ? <SvgAgreeIcon /> : null}
        </span>
        {label}
      </label>
    </li>
  );
}

export default CheckboxItem;
