import { Tabs } from "../components";
import ImpactComp from "../components/ImpactComp";
import { useState, useEffect, useRef } from "react";

function App() {
  const impactTabItems2 = [
    { header: { text: "Impact" }, content: ImpactComp },
    { header: { text: "Charter" }, content: "Coming Soon" },
    { header: { text: "Comments" }, content: "Coming Soon" },
  ];

  // const column1Ref = useRef(null);
  // const column2Ref = useRef(null);
  // const dividerRef = useRef(null);

  // const [isDragging, setIsDragging] = useState(false);

  // const resizeCol = (e) => {
  //   console.clear();
  //   console.log(Date.now());
  //   setIsDragging(true);
  //   console.log(document);
  //   console.log(column1Ref.current.style);
  //   console.log(column2Ref);
  //   document.body.style.cursor = "col-resize";
  //   const startX = e.clientX;
  //   const initialWidth = column1Ref.current.clientWidth;
  //   const containerWidth =
  //     column1Ref.current.clientWidth + column2Ref.current.clientWidth;
  //   document.addEventListener("mousemove", (e) => {
  //     if (!isDragging) return;
  //     const offsetX = e.clientX - startX;
  //     console.log(offsetX);
  //     const newWidth = ((initialWidth + offsetX) / containerWidth) * 100;
  //     const newWidth2 = 100 - newWidth;
  //     column1Ref.current.style.flex = `${newWidth} 0 auto`;
  //     column2Ref.current.style.flex = `${newWidth2} 0 auto`;
  //     console.log(`${newWidth} 0 auto`);
  //     console.log(`${newWidth2} 0 auto`);
  //     // console.log('123',e)
  //   });
  // document.addEventListener("mouseup", () => {
  //   setIsDragging(false);
  //   document.body.style.cursor = "auto";
  // });
  // };

  // document.addEventListener("mouseup", () => {
  //   setIsDragging(false);
  //   document.body.style.cursor = "auto";
  // });

  // const stopResize = () => {
  //   setIsDragging(false);
  //   document.body.style.cursor = "auto";
  //   document.removeEventListener("mousemove", resizeCol);
  // };

  // useEffect(() => {
  //   const handleMouseDown = (e) => {
  //     setIsDragging(true);
  //     document.body.style.cursor = "col-resize";

  //     const startX = e.clientX;
  //     const initialWidth = column1Ref.current.clientWidth;
  //     const containerWidth =
  //       column1Ref.current.clientWidth + column2Ref.current.clientWidth;

  //     const handleMouseMove = (e) => {
  //       if (!isDragging) return;
  //       const offsetX = e.clientX - startX;
  //       const newWidth = ((initialWidth + offsetX) / containerWidth) * 100;
  //       const newWidth2 = 100 - newWidth;
  //       column1Ref.current.style.flex = `${newWidth} 0 auto`;
  //       column2Ref.current.style.flex = `${newWidth2} 0 auto`;
  //     };

  //     const handleMouseUp = () => {
  //       setIsDragging(false);
  //       document.body.style.cursor = "auto";

  //       document.removeEventListener("mousemove", handleMouseMove);
  //       document.removeEventListener("mouseup", handleMouseUp);
  //     };

  //     document.addEventListener("mousemove", handleMouseMove);
  //     document.addEventListener("mouseup", handleMouseUp);
  //   };

  //   dividerRef.current.addEventListener("mousedown", handleMouseDown);

  //   return () => {
  //     dividerRef.current.removeEventListener("mousedown", handleMouseDown);
  //   };
  // }, [isDragging]);

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
        console.log('working')
        const offsetX = e.clientX - startX;
        const newWidth = ((initialWidth + offsetX) / containerWidth) * 100;
        const newWidth2 = 100 - newWidth;
        column1.style.flex = `${newWidth} 0 auto`;
        column2.style.flex = `${newWidth2} 0 auto`;
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
        .resizable-container {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        .resizable-column {
          flex: 1;
          padding: 20px;
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          overflow: auto;
          min-width: 100px;
        }

        .resizable-divider {
          min-width: 8px;
          cursor: col-resize;
          background-color: #ddd;
        }
      `}</style>

      {/* <div className="resizable-container">
        <div ref={column1Ref} className="resizable-column" id="column1">
          Column 1
        </div>
        <div
          onMouseDown={resizeCol}
          onMouseUp={stopResize}
          ref={dividerRef}
          className="resizable-divider"
        ></div>
        <div
          ref={column2Ref}
          className="lg:mt-24 md:mt-32 mt-40 pb-20 max-w-7xl mx-auto px-4"
          id="column2"
        >
          <Tabs tabItems={impactTabItems2} id="main" />
        </div>
      </div> */}
      <div className="resizable-container">
        <div className="resizable-column" id="column1">
          Column 1
        </div>
        <div className="resizable-divider"></div>
        <div className="resizable-column" id="column2">
          {/* <Tabs tabItems={impactTabItems2} id="main" /> */}
          column 2
        </div>
      </div>
    </>
  );
}

export default App;
