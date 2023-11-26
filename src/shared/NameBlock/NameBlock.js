import React, { memo } from "react";

/**
 * NameBlock component for rendering a block with a label and an input for the name.
 *
 * @component
 *
 * @param {Object} props - The properties of the NameBlock component.
 * @param {string} props.value - The value of the input field.
 * @param {function} props.handleChange - The function to handle changes in the input field.
 *
 * @returns {React.Component} Returns the NameBlock component.
 */
export const NameBlock = memo((props) => {
  const { value, handleChange } = props;

  return (
    <div className="w-full pt-4 px-4 pb-6 bg-dark flex-start items-start flex-col gap-1 rounded-lg">
      <label
        className="text-xs font-semibold leading-[18px] text-secondary"
        htmlFor="name"
      >
        Название
      </label>
      <input
        type="text"
        placeholder=""
        id="name"
        className="inputName"
        title="Enter only letters"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
});
