import { useState } from "react";

const useAppInit = () => {
  const [normalPalleteRotate, setNormalPalleteRotate] = useState("rotate-left");
  const [savedPalleteItems, setSavedPalleteItems] = useState(
    JSON.parse(localStorage.getItem("savedPalleteItems")) || []
  );
  const [currentNormalPallete, setCurrentNormalPallete] = useState([
    "#414141",
    "#1c76d0",
    "#2d9a5c",
    "#d67f58",
    "#4772b2",
    "#8adfa8",
    "#d9d087",
    "#e98e83",
    "#3c68ba",
    "#ce9f29",
  ]);
  const [currentGradientPallete, setCurrentGradientPallete] = useState([
    ["#414141", "#148e60"],
    ["#1fe5a7", "#1b5a98"],
    ["#ce9f29", "#e98e83"],
    ["#85e062", "#7fddbe"],
    ["#d67f58", "#f42ed0"],
    ["#75efa2", "#48dbe9"],
    ["#1c76d0", "#3c68ba"],
    ["#58533c", "#39e2b5"],
    ["#f3ca71", "#4f9c7b"],
    ["#61f3c3", "#4772b2"],
  ]);

  // const [currentShadesPallete, setCurrentShadesPallete] = useState([
  //   "#414141",
  //   "#ba23a1",
  //   "#48b124",
  //   "#b1449c",
  //   "#b123ff"
  // ]);

  const copyColor = (color) => {
    var tempInput = document.createElement("input");
    tempInput.value = color;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  };

  const generateColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 255).toString(16) +
      Math.floor(Math.random() * 255).toString(16) +
      Math.floor(Math.random() * 255).toString(16)
    );
  };

  const normalPalleteHandler = () => {
    setNormalPalleteRotate(
      normalPalleteRotate === "rotate-left" ? "rotate-right" : "rotate-left"
    );
    setCurrentNormalPallete(Array.from({ length: 10 }, generateColor));
  };

  const gradientPalleteHandler = () => {
    setCurrentGradientPallete(
      Array.from({ length: 10 }, () => [generateColor(), generateColor()])
    );
  };

  const generatePallete = (palleteType) => {
    if (palleteType === "normal") normalPalleteHandler();
    else if (palleteType === "gradient") gradientPalleteHandler();
  };

  return [
    copyColor,
    normalPalleteRotate,
    currentNormalPallete,
    generatePallete,
    currentGradientPallete,
    savedPalleteItems,
    setSavedPalleteItems,
  ];
};

export default useAppInit;
