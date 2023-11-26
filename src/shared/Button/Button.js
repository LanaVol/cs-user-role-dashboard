import React from "react";

/**
 * Button component for user interaction.
 *
 * @component
 *
 * @param {Object} props - The properties of the Button component.
 * @param {string} [props.text] - The text to be displayed on the button.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {function} [props.onClick] - The function to be executed on button click.
 * @param {React.Component} [props.Component] - Custom component to be rendered inside the button.
 * @param {string} [props.type] - The type of the button (e.g., "button", "submit").
 *
 * @returns {React.Component} Returns the Button component.
 */
function Button({ text, className, onClick, Component, type }) {
  return (
    <button
      type={type || "button"}
      className={`w-full bg-contrast1 text-light p-[14px] rounded-lg border-2 border-light16 text-sm shadow-buttonShadow font-semibold active:translate-y-[1px] cursor-pointer ${className}`}
      onClick={type ? null : onClick}
    >
      {text || Component}
    </button>
  );
}

export default Button;
