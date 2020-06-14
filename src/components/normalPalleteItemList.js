import React from "react";
import NormalPalleteItem from "./normalPalleteItem";

const NormalPalleteItemList = ({ palletes, rotate }) => {
  let palletesCopy = [...palletes];
  if (window.innerWidth > 1060 && window.innerWidth < 1330)
    palletesCopy = palletesCopy.splice(0, 8);
  else if (window.innerWidth > 789 && window.innerWidth < 1061)
    palletesCopy = palletesCopy.splice(0, 6);
  else if (window.innerWidth < 791) palletesCopy = palletesCopy.splice(0, 4);

  return palletesCopy.map((pallete, index) => {
    return (
      <NormalPalleteItem key={index} rotate={rotate} background={pallete} />
    );
  });
};

export default NormalPalleteItemList;
