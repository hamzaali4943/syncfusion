import { useState } from "react";
import {
  Details,
  EditableWrapper,
  Stats,
  Tabs,
  Targets,
  BreadCrumbs,
  Tasks,
} from ".";

function ImpactComp() {
  const [editable, setEditable] = useState(false);
  const impactTabItems = [
    { header: { text: "Summary" }, content: "Coming Soon" },
    { header: { text: "Targets" }, content: Targets },
    { header: { text: "Chart" }, content: "Coming Soon" },
  ];

  return (
    <div className="p-4 relative">
      <EditableWrapper
        className="absolute -top-14 right-2 mt-0.5"
        isAddComment={true}
        isShare={true}
        isNotify={true}
        isExpand={true}
        isEdit={() => setEditable(!editable)}
      />
      <div className="space-y-10">
        <BreadCrumbs editable={editable} />
        <Stats />
        <Details editable={editable} />
        <div>
          <EditableWrapper title="Tasks" />
          <Tasks />
        </div>
        <div>
          <EditableWrapper title="Impact" />
          <Tabs tabItems={impactTabItems} id="impact" />
        </div>
      </div>
    </div>
  );
}

export default ImpactComp;
