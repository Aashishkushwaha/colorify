import React from "react";
import GradientPalleteItemList from "./gradintPalleteItemList";

const GradientPalleteRow = ({ currentGradientPallete, generatePallete }) => {
  return (
    <div>
      <div className="grid">
        <GradientPalleteItemList palletes={currentGradientPallete} />
      </div>
      <button
        className="btn btn-blue rounded"
        onClick={() => generatePallete("gradient")}
      >
        Next
      </button>
    </div>
  );
};

export default GradientPalleteRow;
