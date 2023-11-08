import { useState } from "react";
import { Details, EditableWrapper, Stats, BreadCrumbs, Tasks } from ".";
import EditableTable from "./editableTable";
import CustomTabs from "./customTabs";

function ImpactComp() {
  const [editable, setEditable] = useState(false);
  const [editTable, setEditTable] = useState(false);
  const tabs = ["Summary", "Targets", "Chart"];

  const [data, setData] = useState([
    {
      id: 1,
      name: "EBITDA",
      value2023: "$26.000,00",
      value2024: "$26.000,00",
      value2025: "$26.000,00",
      value2026: "$26.000,00",
      value2027: "$26.000,00",
    },
    {
      id: 2,
      name: "Net FTE Decrease",
      value2023: "-",
      value2024: "-",
      value2025: "-",
      value2026: "-",
      value2027: "-",
    },
  ]);

  const handleEdit = (id, newValue, field) => {
    console.log({ newValue });
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, [field]: newValue } : item
    );
    setData(updatedData);
  };

  const tabContents = {
    Summary: "Coming Soon",
    Targets: (
      <EditableTable data={data} editable={editTable} handleEdit={handleEdit} />
    ),
    Chart: "Coming Soon",
  };

  return (
    <div className="p-2 lg:p-4 relative">
      <EditableWrapper
        className="absolute lg:-top-14 -top-6 lg:right-2 right-0 mt-0.5 bg-gray-50"
        isEdit={() => setEditable(!editable)}
      />
      <div className="md:space-y-10 space-y-8">
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
          <CustomTabs
            tabs={tabs}
            defaultTab="Targets"
            tabContents={tabContents}
          />
        </div>
      </div>
    </div>
  );
}

export default ImpactComp;
