import React from "react";
import ShadesPalleteItemList from "./shadesPalleteItemList";

const ShadesPalleteRow = ({ currentShadesPallete, generatePallete }) => {
  return (
    <div>
      <div className="grid">
        <ShadesPalleteItemList palletes={currentShadesPallete} />
      </div>
      <button
        className="btn btn-blue rounded"
        onClick={() => generatePallete("shades")}
      >
        Generate Pallete
      </button>
    </div>
  );
};

export default ShadesPalleteRow;
