import { Details, Stats, Tabs } from "../components";

function App() {
  return (
    <div className="lg:mt-20 md:mt-32 mt-40 max-w-7xl mx-auto px-4 space-y-10">
      <Stats />
      <Details />
      <div>
        <h1 className="text-2xl font-bold">
          Syncfusion Tabs with Tailwind CSS
        </h1>
        <Tabs />
      </div>
    </div>
  );
}

export default App;
