import {
  Details,
  EditableWrapper,
  Stats,
  Tabs,
  Targets,
  BreadCrumbs,
  Tasks,
} from "../components";

function App() {
  const impactTabItems = [
    { header: { text: "Summary" }, content: "Coming Soon" },
    { header: { text: "Targets" }, content: Targets },
    { header: { text: "Chart" }, content: "Coming Soon" },
  ];
  return (
    <div className="lg:mt-20 md:mt-32 mt-40 pb-20 max-w-7xl mx-auto px-4 space-y-10">
      <BreadCrumbs />
      <Stats />
      <Details />
      <div>
        <EditableWrapper title="Tasks" />
        <Tasks />
      </div>
      <div>
        <EditableWrapper title="Impact" />
        <Tabs tabItems={impactTabItems} />
      </div>
    </div>
  );
}

export default App;
