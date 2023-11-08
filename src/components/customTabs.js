import React, { useState } from "react";

const CustomTabs = ({ tabs, defaultTab, tabContents }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);

  return (
    <div className="w-full">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab
                ? "text-black font-medium border-blue-500"
                : "text-gray-700 border-gray-150"
            } px-4 py-2 focus:outline-none border-b-2 text-sm`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabContents[activeTab]}
      </div>
    </div>
  );
};

export default CustomTabs;
