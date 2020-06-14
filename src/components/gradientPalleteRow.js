import React from "react";
import GradientPalleteItemList from "./gradintPalleteItemList";

const GradientPalleteRow = ({
  gradientPalleteRotate,
  currentGradientPallete,
  generatePallete
}) => {
  return (
    <div>
      <div className="grid">
        <GradientPalleteItemList
          rotate={gradientPalleteRotate}
          palletes={currentGradientPallete}
        />
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
