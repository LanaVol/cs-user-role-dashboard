import React from "react";

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
