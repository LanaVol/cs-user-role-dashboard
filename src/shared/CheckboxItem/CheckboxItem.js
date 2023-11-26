import React from "react";
import { SvgAgreeIcon } from "../Icons";

function CheckboxItem({ label, isChecked, handlePermitToggle }) {
  return (
    <li className="flex-start">
      <input
        type="checkbox"
        id={label}
        className="hidden checkbox"
        onChange={() => handlePermitToggle(label)}
        value={isChecked}
      />
      <label
        htmlFor={label}
        className="flex-start gap-2 text-xs font-medium text-light"
      >
        <span
          className={`checkflag flex justify-center items-center transition duration-150 linear ${
            isChecked ? "border-contrast1" : "border-light8"
          }`}
        >
          {isChecked ? <SvgAgreeIcon /> : null}
        </span>
        {label}
      </label>
    </li>
  );
}

export default CheckboxItem;
