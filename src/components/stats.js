import { React, useState } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

function Stats(props) {
  const statsList = [
    {
      className: "border-r md:border-0",
      title: "Total Sales volume",
      value: "$49.2B",
    },
    {
      className: "md:!px-4",
      title: "Sales Order Items",
      value: "2.61M",
    },
    {
      className: "md:!px-4 border-r border-t md:border-0",
      title: "On Time Delivery",
      value: "61%",
    },
    {
      className: "md:!px-4 border-t md:border-0",
      title: "Perfect Order rate",
      value: "58%",
    },
  ];
  const sportsData = ["Stage 1-IDEA", "Stage 2-IDEA2", "Stage 3-IDEA3"];
  const fields = { text: "Stage 1-IDEA", value: "Stage 1-IDEA" };
  const [value, setValue] = useState("Stage 1-IDEA");
  const onChange = (args) => {
    setValue(args.itemData === null ? "null" : args.itemData[fields.value]);
  };

  return (
    <div className="lg:flex items-center justify-between">
      <div className="md:flex grid grid-cols-2 items-center justify-between md:divide-x md:gap-8">
        {statsList.map((item, index) => (
          <div className={`${item.className} p-4 md:p-0`} key={index}>
            <p className="text-sm">{item.title}</p>
            <h4 className="text-4xl font-bold">{item.value}</h4>
          </div>
        ))}
      </div>
      <DropDownListComponent
        id="games"
        dataSource={sportsData}
        fields={fields}
        change={onChange.bind(this)}
        placeholder="Stage 1- IDEA"
        value={value}
        popupHeight="220px"
        cssClass="sm:!w-64 !w-full"
      />
    </div>
  );
}

export default Stats;
