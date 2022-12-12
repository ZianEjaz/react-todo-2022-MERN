import React, { useState } from "react";
import "./testing.css";

const Testing = () => {
  const [clickedArray, setClickedArray] = useState([]);

  const tdclick = (event) => {
    const clickedId = parseInt(event.target.id);
    if (clickedArray.includes(clickedId)) {
      setClickedArray(clickedArray.filter((item) => item !== clickedId));
    } else {
      if (clickedArray.length < 1) {
        setClickedArray([...clickedArray, clickedId]);
      } else if (
        clickedArray.includes(clickedId + 3) ||
        clickedArray.includes(clickedId - 1) ||
        clickedArray.includes(clickedId + 1) ||
        clickedArray.includes(clickedId - 3)
      ) {
        setClickedArray([...clickedArray, clickedId]);
      }
    }
  };
  return (
    <div className="mx-auto">
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td
              id="1"
              onClick={tdclick}
              className={clickedArray.includes(1) ? "bg-red-600" : ""}
            ></td>
            <td
              id="2"
              onClick={tdclick}
              className={clickedArray.includes(2) ? "bg-red-600" : ""}
            ></td>
            <td
              id="3"
              onClick={tdclick}
              className={clickedArray.includes(3) ? "bg-red-600" : ""}
            ></td>
          </tr>
          <tr>
            <td
              id="4"
              onClick={tdclick}
              className={clickedArray.includes(4) ? "bg-red-600" : ""}
            ></td>
            <td
              id="5"
              onClick={tdclick}
              className={clickedArray.includes(5) ? "bg-red-600" : ""}
            ></td>
            <td
              id="6"
              onClick={tdclick}
              className={clickedArray.includes(6) ? "bg-red-600" : ""}
            ></td>
          </tr>
          <tr>
            <td
              id="7"
              onClick={tdclick}
              className={clickedArray.includes(7) ? "bg-red-600" : ""}
            ></td>
            <td
              id="8"
              onClick={tdclick}
              className={clickedArray.includes(8) ? "bg-red-600" : ""}
            ></td>
            <td
              id="9"
              onClick={tdclick}
              className={clickedArray.includes(9) ? "bg-red-600" : ""}
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Testing;
