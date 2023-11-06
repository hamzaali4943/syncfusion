import { React, useState } from "react";
import { RadioButtonComponent } from "@syncfusion/ej2-react-buttons";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
const Details = ({ editable }) => {
  const [selectedOption, setSelectedOption] = useState("Owner");
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

  const [textareaText, setTextareaText] = useState(
    "An optional page title supplied as a string or object with the following attributes: text, icon, loading"
  );

  const [inputValues, setInputValues] = useState(
    implementationList.map((item) => item.value)
  );
  const [inputValue, setInputValue] = useState("Digital Marketing");

  const handleInput = (newValue) => {
    setInputValue(newValue);
  };

  const handleInputChange = (index, newValue) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = newValue;
    setInputValues(newInputValues);
  };

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
          {editable ? (
            <TextBoxComponent
              multiline={true}
              rows={50}
              placeholder="Enter text here"
              onChange={(e) => setTextareaText(e.target.value)}
              cssClass="w-full p-4 !border !border-gray-600 focus:outline-none focus:!border-blue-300"
              value={textareaText}
            />
          ) : (
            <p className="border border-gray-600 bg-gray-200 h-56 w-full p-6 text-base">
              {textareaText}
            </p>
          )}
        </div>
        <div className="w-full md:px-4 py-1">
          <h5 className="text-gray-300 font-semibold pb-3">Team</h5>
          <div className="flex items-center space-x-4">
            {editable ? (
              <>
                <div>
                  <RadioButtonComponent
                    label="Owner"
                    name="radioGroup"
                    value="Owner"
                    checked={selectedOption === "Owner"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                </div>
                <div>
                  <RadioButtonComponent
                    label="Sponsor"
                    name="radioGroup"
                    value="Sponsor"
                    checked={selectedOption === "Sponsor"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-20">
                  <p className="text-sm text-gray-700 font-light pb-1">
                    {selectedOption}
                  </p>
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
              </>
            )}
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 py-4 gap-4">
            <div className="">
              <p className="text-sm text-gray-700 font-light pb-1">
                Working Group
              </p>
              {editable ? (
                <input
                  className="e-input"
                  name="input"
                  type="text"
                  placeholder="Digital Marketing"
                  value={inputValue}
                  onChange={(e) => handleInput(e.target.value)}
                />
              ) : (
                <p className="text-sm text-primary font-light">{inputValue}</p>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-700 font-light pb-1">OCM Tags</p>
              <div className="flex items-center space-x-3">
                <button
                  id="update"
                  className="e-btn bg-green-50 hover:bg-green-50 focus:bg-green-50 shadow-none hover:shadow-none focus:shadow-none rounded-full px-3 py-1 text-green-100 text-xs"
                >
                  Strategy
                </button>
                <button
                  id="update"
                  className="e-btn bg-yellow-50 hover:bg-yellow-50 focus:bg-yellow-50 shadow-none hover:shadow-none focus:shadow-none rounded-full px-3 py-1 text-green-100 text-xs"
                >
                  Revenue
                </button>
              </div>
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
                {editable ? (
                  <input
                    className="e-input"
                    name="input"
                    type="text"
                    placeholder={item.value}
                    value={inputValues[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                ) : (
                  <p className="text-sm text-primary font-light">
                    {/* {item.value} */}
                    {inputValues[index]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
