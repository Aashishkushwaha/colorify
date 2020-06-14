// import React, { useState } from "react";

// const useAppSetup = rotate => {
//   const [rotate, setRotate] = useState("rotate-left");
//   const [currentNormalPallete, setCurrentNormalPallete] = useState([
//     "#414141",
//     "#ba23a1",
//     "#48b124",
//     "#b1449c",
//     "#b123ff"
//   ]);
//   const [currentGradientPallete, setCurrentGradientPallete] = useState([
//     "#414141",
//     "#ba23a1",
//     "#48b124",
//     "#b1449c",
//     "#b123ff"
//   ]);
//   const [currentShadesPallete, setCurrentShadesPallete] = useState([
//     "#414141",
//     "#ba23a1",
//     "#48b124",
//     "#b1449c",
//     "#b123ff"
//   ]);

//   const generateColor = () =>
//     "#" +
//     Math.floor(Math.random() * 255).toString(16) +
//     Math.floor(Math.random() * 255).toString(16) +
//     Math.floor(Math.random() * 255).toString(16);

//   const generatePallete = () => {
//     let newPalleteColors = Array.from({ length: 5 }, generateColor);
//     // setCurrentPallete(newPalleteColors);
//     setRotate(rotate === "rotate-left" ? "rotate-right" : "rotate-left");
//   };

//   return [
//     currentNormalPallete,
//     currentGradientPallete,
//     currentShadesPallete,
//     setCurrentGradientPallete,
//     setCurrentGradientPallete,
//     setCurrentShadesPallete,
//     generateColor,
//     generatePallete
//   ];
// };
