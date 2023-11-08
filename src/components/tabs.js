import React from "react";
import {
  TabComponent,
  TabItemsDirective,
  TabItemDirective,
} from "@syncfusion/ej2-react-navigations";

const Tabs = (props) => {
  return (
    <TabComponent height="250px" id={props.id}>
      <TabItemsDirective>
        {props.tabItems.map((item, index) => (
          <TabItemDirective
            key={index}
            header={item.header}
            content={item?.content}
          />
        ))}
      </TabItemsDirective>
    </TabComponent>
  );
};

export default Tabs;
