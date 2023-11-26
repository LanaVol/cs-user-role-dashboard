import React, { memo } from "react";
import { SvgAgreeIcon } from "../Icons";

/**
 * CheckboxItem component for displaying a checkbox with a label.
 *
 * @component
 *
 * @param {Object} props - The properties of the CheckboxItem component.
 * @param {string} props.label - The label text for the checkbox.
 * @param {boolean} props.isChecked - A boolean indicating whether the checkbox is checked.
 * @param {function} props.handlePermitToggle - The function to be called when the checkbox is toggled.
 *
 * @returns {React.Component} Returns the CheckboxItem component.
 */
export const CheckboxItem = memo(({ label, isChecked, handlePermitToggle }) => {
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
});
