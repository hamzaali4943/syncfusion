import { Tabs } from "../components";
import ImpactComp from "../components/ImpactComp";

function App() {
  const impactTabItems2 = [
    { header: { text: "Impact" }, content: ImpactComp },
    { header: { text: "Charter" }, content: "Coming Soon" },
    { header: { text: "Comments" }, content: "Coming Soon" },
  ];
  return (
    <div className="lg:mt-24 md:mt-32 mt-40 pb-20 max-w-7xl mx-auto px-4">
      <Tabs tabItems={impactTabItems2} id="main" />
    </div>
  );
}

export default App;
