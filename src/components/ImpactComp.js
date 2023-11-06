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
  const [editTable, setEditTable] = useState(false);

  const targetTabContent = () => {
    return <Targets editable={editTable} />;
  };

  const impactTabItems = [
    { header: { text: "Targets" }, content: targetTabContent },
    { header: { text: "Summary" }, content: "Coming Soon" },
    { header: { text: "Chart" }, content: "Coming Soon" },
  ];

  return (
    <div className="p-4 relative">
      <EditableWrapper
        className="absolute -top-14 right-2 mt-0.5"
        isEdit={() => setEditable(!editable)}
      />
      <div className="space-y-10">
        <BreadCrumbs editable={editable} />
        <Stats />
        <Details editable={editable} />
        <div>
          <EditableWrapper
            title="Tasks"
            isAddComment={false}
            isShare={false}
            isNotify={false}
            isExpand={false}
          />
          <Tasks />
        </div>
        <div>
          <EditableWrapper
            title="Impact"
            isAddComment={false}
            isShare={false}
            isNotify={false}
            isExpand={false}
            isEdit={() => setEditTable(!editTable)}
          />
          <Tabs tabItems={impactTabItems} id="impact" />
        </div>
      </div>
    </div>
  );
}

export default ImpactComp;
