import React from "react";

const DisplayNumber = (props) => {
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={props.number} readOnly /> &nbsp;{props.unit}
    </div>
  );
};

export default DisplayNumber;
