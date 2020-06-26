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
    palletes.map((pallete, index) => {
      if (pallete.length > 1)
        tempPalleteItems.gradient.push({ pallete, index });
      else if (Array.isArray(pallete[0]))
        tempPalleteItems.shades.push({ pallete, index });
      else tempPalleteItems.normal.push({ pallete, index });
      return null;
    });
    setPalleteItems({ ...palleteItems, ...tempPalleteItems });
  }, [palletes.length]);

  return palletes.length ? (
    <div>
      <div className="grid" style={{ marginBottom: "1.4rem" }}>
        {palleteItems.normal.map((item) => {
          return (
            <NormalPalleteItem
              index={item.index}
              key={item.index}
              background={item.pallete[0]}
              removeSavedPalleteItem={true}
              disableLock={true}
            />
          );
        })}
      </div>
      <div className="grid" style={{ marginBottom: "1.4rem" }}>
        {palleteItems.gradient.map((item) => {
          return (
            <GradientPalleteItem
              index={item.index}
              key={item.index}
              primaryBackground={item.pallete[0]}
              secondaryBackground={item.pallete[1]}
              removeSavedPalleteItem={true}
              disableLock={true}
            />
          );
        })}
      </div>
      <div className="grid" style={{ marginBottom: "1.4rem" }}>
        {palleteItems.shades.map((item) => {
          return (
            <ShadesPalleteItem
              key={item.index}
              index={item.index}
              background={item.pallete[0]}
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
