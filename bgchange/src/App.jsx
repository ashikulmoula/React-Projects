import { useState } from "react";

function App() {
  const [color, setColor] = useState("color");
  return (
    <div
      className=" w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className=" fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap bg-white rounded-xl justify-center items-center px-3 py-2 gap-3 shadow-lg">
          <button
            onClick={() => setColor("green")}
            className=" bg-green-400 flex rounded-lg py-2 px-4 justify-center items-center">
            Green
          </button>
          <button
            onClick={() => setColor("red")}
            className=" bg-red-400 flex rounded-lg py-2 px-4 justify-center items-center">
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className=" bg-blue-400 flex rounded-lg py-2 px-4 justify-center items-center">
            Blue
          </button>
          <button
            onClick={() => setColor("white")}
            className=" bg-white-400 flex rounded-lg py-2 px-4 justify-center items-center">
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className=" bg-black flex rounded-lg text-base text-white py-2 px-4 justify-center items-center">

              
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
