import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import React from "react";

const EditableWrapper = (props) => {
  return (
    <div className="flex items-center justify-between pb-5">
      <h2 className="text-2xl font-light text-gray-100 tracking-wide">
        {props.title}
      </h2>
      <div className="flex items-center space-x-5">
        <ButtonComponent cssClass="bg-transparent hover:bg-transparent focus:bg-transparent px-0 shadow-none focus:shadow-none hover:shadow-none">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5625 8.9375V5H8.4375V8.9375H4.5V10.0625H8.4375V14H9.5625V10.0625H13.5V8.9375H9.5625Z"
              fill="#73828C"
            />
          </svg>
        </ButtonComponent>
        <ButtonComponent cssClass="bg-transparent hover:bg-transparent focus:bg-transparent px-0 shadow-none focus:shadow-none hover:shadow-none">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="18"
              height="18"
              transform="translate(0 0.5)"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.2875 3.9875C14.7375 4.4375 14.7375 5.1125 14.2875 5.5625L5.85 14H2.25V10.4L10.6875 1.9625C11.1375 1.5125 11.8125 1.5125 12.2625 1.9625L14.2875 3.9875ZM13.5 4.775L11.475 2.75L9.7875 4.4375L11.8125 6.4625L13.5 4.775ZM3.375 10.85V12.875H5.4L11.025 7.25L9 5.225L3.375 10.85ZM1.125 16.25V15.125H16.875V16.25H1.125Z"
              fill="#73828C"
            />
          </svg>
        </ButtonComponent>
        <ButtonComponent cssClass="bg-transparent hover:bg-transparent focus:bg-transparent px-0 shadow-none focus:shadow-none hover:shadow-none">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 10.625C5.12132 10.625 5.625 10.1213 5.625 9.5C5.625 8.87868 5.12132 8.375 4.5 8.375C3.87868 8.375 3.375 8.87868 3.375 9.5C3.375 10.1213 3.87868 10.625 4.5 10.625ZM9 10.625C9.62132 10.625 10.125 10.1213 10.125 9.5C10.125 8.87868 9.62132 8.375 9 8.375C8.37868 8.375 7.875 8.87868 7.875 9.5C7.875 10.1213 8.37868 10.625 9 10.625ZM14.625 9.5C14.625 10.1213 14.1213 10.625 13.5 10.625C12.8787 10.625 12.375 10.1213 12.375 9.5C12.375 8.87868 12.8787 8.375 13.5 8.375C14.1213 8.375 14.625 8.87868 14.625 9.5Z"
              fill="#73828C"
            />
          </svg>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default EditableWrapper;
