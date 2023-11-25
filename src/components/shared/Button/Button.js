import React from "react";

function Button({ text, className, onClick }) {
  return (
    <button
      type="button"
      className={
        "w-full bg-contrast1 text-light p-[14px] rounded-lg border-2 border-light16 text-sm font-semibold"
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
