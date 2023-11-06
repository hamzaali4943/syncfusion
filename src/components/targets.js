import React from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  TreeGridComponent,
} from "@syncfusion/ej2-react-treegrid";

const EditableInput = ({ value, editable, onChange }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    console.log("newValue", newValue);
  };

  if (editable) {
    return (
      <input
        className="e-input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type here..."
      />
    );
  } else {
    return value;
  }
};

const Targets = ({ editable }) => {
  const orderData = [
    {
      name: "EBITDA",
      value2023: "$26.000,00",
      value2024: "$26.000,00",
      value2025: "$26.000,00",
      value2026: "$26.000,00",
      value2027: "$26.000,00",
    },
    {
      name: "Net FTE Decrease",
      value2023: "-",
      value2024: "-",
      value2025: "-",
      value2026: "-",
      value2027: "-",
    },
  ];

  const handleValueChange = (rowIndex, fieldName, newValue) => {
    console.log(
      `Value changed in row ${rowIndex}, field ${fieldName}: ${newValue}`
    );
  };

  return (
    <div>
      <TreeGridComponent
        dataSource={orderData}
        treeColumnIndex={0}
        childMapping="subtasks"
      >
        <ColumnsDirective>
          <ColumnDirective field="name" headerText="Name" width="280" />
          {[2023, 2024, 2025, 2026, 2027].map((year) => (
            <ColumnDirective
              key={year}
              field={`value${year}`}
              headerText={String(year)}
              template={(props) => (
                <div>
                  <EditableInput
                    value={props[`value${year}`]}
                    editable={editable}
                    onChange={(newValue) => {
                      handleValueChange(props.index, year, newValue);
                    }}
                  />
                </div>
              )}
              width="180"
            />
          ))}
        </ColumnsDirective>
      </TreeGridComponent>
    </div>
  );
};

export default Targets;
