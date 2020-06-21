import React, { useEffect, useState } from "react";
import NormalPalleteItem from "./normalPalleteItem";
import GradientPalleteItem from "./gradientPalleteItem";
import ShadesPalleteItem from "./shadesPalleteItem";

const SavedPalleteItems = ({ palletes }) => {
  let initialPalleteItems = {
    normal: [],
    gradient: [],
    shades: [],
  };
  let [palleteItems, setPalleteItems] = useState(initialPalleteItems);

  useEffect(() => {
    let tempPalleteItems = { ...initialPalleteItems };
    palletes.map((pallete) => {
      if (pallete.length > 1) tempPalleteItems.gradient.push(pallete);
      else if (Array.isArray(pallete[0])) tempPalleteItems.shades.push(pallete);
      else tempPalleteItems.normal.push(pallete);
      return null;
    });
    setPalleteItems({ ...palleteItems, ...tempPalleteItems });
  }, [palletes.length]);

  return palletes.length ? (
    <div>
      <div className="grid" style={{ marginBottom: "1.4rem" }}>
        {palleteItems.normal.map((pallete, index) => {
          return (
            <NormalPalleteItem
              index={index}
              key={index}
              background={pallete[0]}
              removeSavedPalleteItem={true}
              disableLock={true}
            />
          );
        })}
      </div>
      <div className="grid" style={{ marginBottom: "1.4rem" }}>
        {palleteItems.gradient.map((pallete, index) => {
          return (
            <GradientPalleteItem
              index={index}
              key={index}
              primaryBackground={pallete[0]}
              secondaryBackground={pallete[1]}
              removeSavedPalleteItem={true}
              disableLock={true}
            />
          );
        })}
      </div>
      <div className="grid" style={{ marginBottom: "1.4rem" }}>
        {palleteItems.shades.map((pallete, index) => {
          return (
            <ShadesPalleteItem
              key={index}
              index={index}
              background={pallete[0]}
              removeSavedPalleteItem={true}
              disableLock={true}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <h1 className="heading">Don't have any saved items!!!</h1>
  );
};

export default SavedPalleteItems;
