import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { React } from "react";

function Details(props) {
  const implementationList = [
    {
      title: "Type",
      value: "Company Objective",
    },
    {
      title: "Initiative Type",
      value: "Financial",
    },
    {
      title: "Date",
      value: "September 1st 2023",
    },
    {
      title: "P&L Impact",
      value: "OPEX",
    },
    {
      title: "Benefits",
      value: "$500 - $1m",
    },
    {
      title: "Investment",
      value: "Less than $50k",
    },
    {
      title: "Resouces",
      value: "High",
    },
    {
      title: "Ease",
      value: "Medium",
    },
    {
      title: "Priotiy",
      value: "High",
    },
  ];

  return (
    <div className="">
      <div className="flex items-center space-x-1">
        <img src="../../lock.svg" alt="lock" className="-ml-1.5" />
        <h2 className="text-2xl tracking-wide text-gray-100 font-light">
          Details
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gris-cols-1 lg:gap-10 gap-5 py-4">
        <div className="md:pr-10">
          <div className="border border-gray-600 bg-gray-200 h-56 w-full"></div>
        </div>
        <div className="w-full md:px-4 py-1">
          <h5 className="text-gray-300 font-semibold pb-3">Team</h5>
          <div className="flex items-center space-x-4">
            <div className="w-20">
              <p className="text-sm text-gray-700 font-light pb-1">Owner</p>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.5" cy="11.5" r="11.5" fill="#E1E1E1" />
              </svg>
            </div>
            <div className="w-20">
              <p className="text-sm text-gray-700 font-light pb-1">Sponsor</p>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.5" cy="11.5" r="11.5" fill="#E1E1E1" />
              </svg>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 py-4 gap-4">
            <div className="">
              <p className="text-sm text-gray-700 font-light pb-1">
                Working Group
              </p>
              <p className="text-sm text-primary font-light">
                Digital Marketing
              </p>
            </div>
            <div className="">
              <p className="text-sm text-gray-700 font-light pb-1">OCM Tags</p>
            </div>
          </div>
          <h5 className="text-gray-400 font-semibold pb-1 pt-5 tracking-wide">
            Implementation details
          </h5>
          <div className="grid lg:grid-cols-3 grid-cols-2 py-4 gap-4">
            {implementationList.map((item, index) => (
              <div key={index}>
                <p className="text-sm text-gray-700 font-light pb-1">
                  {item.title}
                </p>
                <p className="text-sm text-primary font-light">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
