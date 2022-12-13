import React, { useState, useEffect } from "react";

const DynamicGridComponent = ({ row, col }) => {
  col = parseInt(col);
  const [clickedArray, setClickedArray] = useState([]);
  const gridWidth = col * 100;
  const gridItemsWidth = gridWidth / col;

  const grid = () => {
    let a = [];
    for (let x = 1; x <= row * col; x++) {
      a.push(
        <div
          key={x}
          id={x}
          onClick={tdclick}
          className={`td ${clickedArray.includes(x) ? "bg-red-600 " : ""}`}
          style={{ width: gridItemsWidth }}
        ></div>
      );
    }
    return a;
  };

  const tdclick = (event) => {
    // checks for click id
    const clickedId = parseInt(event.target.id);

    if (clickedArray.includes(clickedId)) {
      setClickedArray(clickedArray.filter((item) => item !== clickedId));
    }
    // if it is not already checked
    else {
      // checking first click
      if (clickedArray.length < 1) {
        setClickedArray([...clickedArray, clickedId]);
      }
      // checking clicked index and implementing checked logic
      else if (
        clickedArray.includes(clickedId + col) ||
        clickedArray.includes(clickedId - col) ||
        (clickedArray.includes(clickedId - 1) && (clickedId - 1) % col !== 0) ||
        (clickedArray.includes(clickedId + 1) && clickedId % col !== 0)
      ) {
        setClickedArray([...clickedArray, clickedId]);
      }
    }
  };

  useEffect(() => {
    setClickedArray([]);
  }, [row, col]);

  return (
    <div className="flex flex-wrap shadow-xl" style={{ width: gridWidth }}>
      {grid()}
    </div>
  );
};

export default DynamicGridComponent;
