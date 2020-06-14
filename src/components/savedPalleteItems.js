import React from "react";
import NormalPalleteItem from "./normalPalleteItem";
import GradientPalleteItem from "./gradientPalleteItem";

const savedPalleteItems = ({ palletes }) => {
  return palletes.length ? (
    <div>
      <div className="grid">
        {palletes.map((pallete, index) => {
          if (pallete.length > 1) {
            return (
              <GradientPalleteItem
                index={index}
                key={index}
                primaryBackground={pallete[0]}
                secondaryBackground={pallete[1]}
                removeSavedPalleteItem={true}
              />
            );
          } else {
            return (
              <NormalPalleteItem
                index={index}
                key={index}
                background={pallete[0]}
                removeSavedPalleteItem={true}
              />
            );
          }
        })}
      </div>
    </div>
  ) : (
    <h1 className="heading">Don't have any saved items!!!</h1>
  );
};

export default savedPalleteItems;
