import "./App.css";

import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  return (
    <>
      <div
        className=" w-full h-screen bg-black duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center shadow-xl gap-3 bg-white px-3 py-2 rounded-lg">
            <button
              onClick={() => setColor("red")}
              className="rounded-full outline-none px-4 py-1 text-whit shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              onClick={() => setColor("green")}
              className="rounded-full outline-none px-4 py-1 text-whit shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="rounded-full outline-none px-4 py-1 text-whit shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
