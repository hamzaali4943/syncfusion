import { React } from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  TreeGridComponent,
} from "@syncfusion/ej2-react-treegrid";

const Targets = () => {
  const orderData = [
    {
      name: "EBITDA",
      2023: "$26.000,00",
      2024: "$26.000,00",
      2025: "$26.000,00",
      2026: "$26.000,00",
      2027: "$26.000,00",
    },
    {
      name: "Net FTE Decrease",
      2023: "-",
      2024: "-",
      2025: "-",
      2026: "-",
      2027: "-",
    },
  ];
  return (
    <TreeGridComponent
      dataSource={orderData}
      treeColumnIndex={0}
      childMapping="subtasks"
      // height="315"
    >
      <ColumnsDirective>
        <ColumnDirective field="name" headerText="Name" />
        <ColumnDirective field="2023" headerText="2023" width="180" />
        <ColumnDirective field="2024" headerText="2024" width="180" />
        <ColumnDirective field="2025" headerText="2025" width="180" />
        <ColumnDirective field="2026" headerText="2026" width="180" />
        <ColumnDirective field="2027" headerText="2027" width="180" />
      </ColumnsDirective>
    </TreeGridComponent>
  );
};

export default Targets;
