import { useState } from "react";

function App() {
  const [color, setcolor] = useState("fuchsia");
  return (
    <>
      <div
        className="h-[100vh] w-full flex justify-center items-center"
        style={{ backgroundColor: color }}>
        <h2 className=" font-semibold relative bottom-[40%] left-[20%]  h-10 text-center py-2 text-xl ">
          {" "}
          Background Color Changer
        </h2>
        <div className="relative flex top-[40%] right-[8%] gap-2">
          <button
            className="  border-2 rounded-md h-10 p-1 w-20 shadow-2xl"
            onClick={() => setcolor("green")}
            style={{ backgroundColor: "green" }}>
            {" "}
            green
          </button>
          <button
            className=" border-2 rounded-md h-10 p-1 w-20"
            onClick={() => setcolor("red")}
            style={{ backgroundColor: "red" }}>
            {" "}
            red
          </button>
          <button
            className=" border-2 rounded-md h-10 p-1 w-20"
            onClick={() => setcolor("blue")}
            style={{ backgroundColor: "blue" }}>
            {" "}
            Blue
          </button>
          <button
            className="  border-2 rounded-md h-10 p-1 w-20"
            onClick={() => setcolor("yellow")}
            style={{ backgroundColor: "yellow" }}>
            {" "}
            yellow
          </button>
          <button
            className=" border-2 rounded-md h-10 p-1 w-20"
            onClick={() => setcolor("violet")}
            style={{ backgroundColor: "violet" }}>
            {" "}
            Violet
          </button>
          <button
            className="  border-2 rounded-md h-10 p-1 w-20"
            onClick={() => setcolor("purple")}
            style={{ backgroundColor: "purple" }}>
            {" "}
            Purple
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
