import React from "react";
import NormalPallateItemList from "./normalPalleteItemList";

const NormalPalleteRow = ({
  normalPalleteRotate,
  currentNormalPallete,
  generatePallete,
}) => {
  return (
    <div>
      <div className="grid">
        <NormalPallateItemList
          rotate={normalPalleteRotate}
          palletes={currentNormalPallete}
        />
      </div>
      <button
        className="btn btn-blue rounded"
        onClick={() => generatePallete("normal")}
      >
        Generate Pallete
      </button>
    </div>
  );
};

export default NormalPalleteRow;
