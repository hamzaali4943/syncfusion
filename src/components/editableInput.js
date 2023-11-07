import React from "react";

const EditableInput = ({ inputValue, editable, onChange }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    // onChange(newValue);
    console.log("newValue", newValue);
  };

  if (editable) {
    return (
      <input
        className="e-input"
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="Type here..."
      />
    );
  } else {
    return inputValue;
  }
};

export default EditableInput;
