import { useState } from "react";

const useAppInit = () => {
  const [showSideBar, setShowSideBar] = useState(false);
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

  const [currentShadesPallete, setCurrentShadesPallete] = useState([
    [41, 41, 41],
    [28, 118, 208],
    [45, 154, 92],
    [214, 117, 88],
    [71, 114, 178],
    [138, 223, 168],
    [217, 208, 135],
    [233, 142, 131],
    [60, 104, 186],
    [198, 159, 41],
  ]);

  const copyColor = (color) => {
    var tempInput = document.createElement("input");
    tempInput.value = color;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  };

  let generateHexCode = () => {
    let code = Math.floor(Math.random() * 255).toString(16);
    return code.length === 1 ? (code = `0${code}`) : code;
  };

  let getHexCode = (number) => {
    let code = Math.floor(number).toString(16);
    return code.length === 1 ? (code = `0${code}`) : code;
  };

  const generateColor = () => {
    return "#" + generateHexCode() + generateHexCode() + generateHexCode();
  };

  const generateRGB = () => [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];

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

  const shadesPalleteHandler = () => {
    setCurrentShadesPallete(Array.from({ length: 10 }, generateRGB));
  };

  const generatePallete = (palleteType) => {
    if (palleteType === "normal") normalPalleteHandler();
    else if (palleteType === "gradient") gradientPalleteHandler();
    else if (palleteType === "shades") shadesPalleteHandler();
  };

  const drawerHandler = () => {
    setShowSideBar(!showSideBar);
  };

  return [
    showSideBar,
    drawerHandler,
    getHexCode,
    copyColor,
    normalPalleteRotate,
    currentNormalPallete,
    generatePallete,
    currentGradientPallete,
    savedPalleteItems,
    setSavedPalleteItems,
    currentShadesPallete,
  ];
};

export default useAppInit;
