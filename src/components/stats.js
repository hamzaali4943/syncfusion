import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { React } from "react";

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
      <ButtonComponent cssClass="sm:w-64 w-full rounded py-2 px-4 mt-4 lg:mt-0 ml-auto flex items-center justify-between bg-gray-500 border border-gray-600 text-gray-900">
        <span>
          Stage 1- <b>IDEA</b>
        </span>
        <span>+</span>
      </ButtonComponent>
    </div>
  );
}

export default Stats;
