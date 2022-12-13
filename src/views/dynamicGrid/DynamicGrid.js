import "./testing.css";
import DynamicGridComponent from "./DynamicGridComponent";
import { useState } from "react";

const DynamicGrid = () => {
  const [row, setRow] = useState(5);
  const [col, setCol] = useState(5);
  return (
    <div className="flex flex-wrap h-full p-6 w-full">
      <div className="w-full">
        <p className="text-3xl font-bold ">
          Enter rows and columns to add grid
        </p>
        <div>
          <input
            type="number"
            className="border border-black rounded p-2 m-2"
            placeholder="Enter Rows"
            onChange={(e) => setRow(e.target.value)}
            value={row}
          />
          <input
            type="number"
            className="border border-black rounded p-2 m-2"
            placeholder="Enter Columns"
            onChange={(e) => setCol(e.target.value)}
            value={col}
          />
        </div>
      </div>
      <div className="w-full">
        <DynamicGridComponent col={col} row={row} />
      </div>
    </div>
  );
};

export default DynamicGrid;
