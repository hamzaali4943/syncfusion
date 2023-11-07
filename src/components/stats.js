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
      className: "",
      title: "Sales Order Items",
      value: "2.61M",
    },
    {
      className: " border-r border-t md:border-0",
      title: "On Time Delivery",
      value: "61%",
    },
    {
      className: " border-t md:border-0",
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
    <div className="flex flex-wrap items-center justify-between">
      <div className="md:flex flex-wrap grid grid-cols-2 items-center justify-between lg:divide-x 2xl:gap-8 gap-4 w-full pb-4">
        {statsList.map((item, index) => (
          <div className={`${item.className}`} key={index}>
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
        cssClass="md:!w-64 !w-full"
      />
    </div>
  );
}

export default Stats;
