import {
  Details,
  EditableWrapper,
  Stats,
  Tabs,
  Targets,
  BreadCrumbs,
  Tasks,
  
} from "../components";
import ImpactComp from "../components/ImpactComp"

function App() {
  const impactTabItems = [
    { header: { text: "Summary" }, content: "Coming Soon" },
    { header: { text: "Targets" }, content: Targets },
    { header: { text: "Chart" }, content: "Coming Soon" },
  ];

  const impactTabItems2 = [
    { header: { text: "Impact" }, content: ImpactComp },
    { header: { text: "Charter" }, content: "Coming Soon" },
    { header: { text: "Comments" }, content: "Coming Soon" },
  ];
  return (
    <div className="lg:mt-20 md:mt-32 mt-40 pb-20 max-w-7xl mx-auto px-4 space-y-10">
      <div className="flex flex-row-reverse">
        <div><EditableWrapper title="" /></div>
        <Tabs tabItems={impactTabItems2} />
      </div>
      {/* <BreadCrumbs /> */}
      {/* <Stats />
      <Details />
      <div>
        <EditableWrapper title="Tasks" />
        <Tasks />
      </div>
      <div>
        <EditableWrapper title="Impact" />
        <Tabs tabItems={impactTabItems} />
      </div> */}
    </div>
  );
}

export default App;