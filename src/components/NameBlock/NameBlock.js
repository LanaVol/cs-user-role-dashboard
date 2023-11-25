import React from "react";

function NameBlock(props) {
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
}

export default NameBlock;
