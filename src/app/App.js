import { Tabs } from "../components";
import ImpactComp from "../components/ImpactComp";
import { useEffect } from "react";

function App() {
  const impactTabItems2 = [
    { header: { text: "Impact" }, content: ImpactComp },
    { header: { text: "Charter" }, content: "Coming Soon" },
    { header: { text: "Comments" }, content: "Coming Soon" },
  ];

  useEffect(() => {
    const column1 = document.getElementById("column1");
    const column2 = document.getElementById("column2");
    const divider = document.querySelector(".resizable-divider");

    let isDragging = false;
    divider.addEventListener("mousedown", (e) => {
      isDragging = true;
      document.body.style.cursor = "col-resize";
      const startX = e.clientX;
      const initialWidth = column1.clientWidth;
      const containerWidth = column1.clientWidth + column2.clientWidth;
      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        console.log("working");
        const offsetX = e.clientX - startX;
        const newWidth = ((initialWidth + offsetX) / containerWidth) * 100;
        const newWidth2 = 100 - newWidth;
        column1.style.flex = `${newWidth} 1 0 `;
        column2.style.flex = `${newWidth2} 1 0 `;
      });
      document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.cursor = "auto";
      });
    });
    document.addEventListener("mouseup", () => {
      isDragging = false;
      document.body.style.cursor = "auto";
    });
  }, []);
  return (
    <>
      <style jsx>{`
        .resizable-column {
          flex: 1;
          border: 1px solid #ddd;
          min-width: 100px;
        }

        .resizable-divider {
          min-width: 8px;
          cursor: col-resize;
          background-color: #ddd;
        }
      `}</style>
      <div className="resizable-container flex sm:flex-row flex-col h-screen overflow-hidden">
        <div className="p-2.5 overflow-auto resizable-column" id="column1">
          Column 1
        </div>
        <div className="resizable-divider"></div>
        <div className="p-2.5 overflow-auto resizable-column h-full" id="column2">
          <Tabs tabItems={impactTabItems2} id="main" />
          {/* column 2 */}
        </div>
      </div>
    </>
  );
}

export default App;
