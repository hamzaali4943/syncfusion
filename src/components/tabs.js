import React from "react";
import {
  TabComponent,
  TabItemsDirective,
  TabItemDirective,
} from "@syncfusion/ej2-react-navigations";

const Tabs = (props) => {
  //   const tabItems = [
  //     { header: { text: "Summary" }, content: "Content of Summary" },
  //     { header: { text: "Targets" }, content: "Content of Targets" },
  //     { header: { text: "Chart" }, content: "Content of Chart" },
  //   ];

  return (
    <TabComponent height="250px" id={props.id}>
      <TabItemsDirective>
        {props.tabItems.map((item, index) => (
          <TabItemDirective
            key={index}
            header={item.header}
            content={item.content}
          />
        ))}
      </TabItemsDirective>
    </TabComponent>
  );
};

export default Tabs;
