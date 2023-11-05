import React from "react";

const SelectButton = ({ text, bg, color, border }) => {
  return (
    <button
      className={`bg-[${bg}] text-[${color}] text-base font-normal border-[${border}] border-r px-4 py-2`}
    >
      {text}
    </button>
  );
};

export default SelectButton;
