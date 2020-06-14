import React from "react";
import GradientPalleteItem from "./gradientPalleteItem";

const GradientPalleteItemList = ({ palletes }) => {
  let palletesCopy = [...palletes];
  if (window.innerWidth > 1060 && window.innerWidth < 1330)
    palletesCopy = palletesCopy.splice(0, 8);
  else if (window.innerWidth > 789 && window.innerWidth < 1061)
    palletesCopy = palletesCopy.splice(0, 6);
  else if (window.innerWidth < 791) palletesCopy = palletesCopy.splice(0, 4);

  return palletesCopy.map((pallete, index) => {
    return (
      <GradientPalleteItem
        key={index}
        primaryBackground={pallete[0]}
        secondaryBackground={pallete[1]}
      />
    );
  });
};

export default GradientPalleteItemList;

/**
 * 
 * //@media screen and (min-width: 1330px) {
//  .pallete-item > div {
//    padding: 10rem 0;
//  }
//}
 */
