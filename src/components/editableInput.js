import React from "react";

const EditableInput = ({ value, editable, onChange }) => {

  if (editable) {
    return (
      <input
        className="e-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type here..."
      />
    );
  } else {
    return value;
  }
};

export default EditableInput;
