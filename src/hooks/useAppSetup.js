import { useState } from "react";

const useAppInit = () => {
  const [normalPalleteRotate, setNormalPalleteRotate] = useState("rotate-left");
  const [currentNormalPallete, setCurrentNormalPallete] = useState([
    "#414141",
    "#ba23a1",
    "#48b124",
    "#b1449c",
    "#b123ff",
    "#1f2a71",
    "#9ac619",
    "#f112fa",
    "#1af547",
    "#ba45",
  ]);
  const [currentGradientPallete, setCurrentGradientPallete] = useState([
    ["#414141", "#b14a67"],
    ["#ba23a1", "#1b5a98"],
    ["#48b124", "#11a9f1"],
    ["#b1449c", "#7788a7"],
    ["#b123ff", "#90acf1"],
    ["#c12356", "#1cf341"],
    ["#23a1ff", "#985af1"],
    ["#f56ac1", "#6a9f1a"],
    ["#41ca3c", "#77cc17"],
    ["#aab31f", "#10b1ab"],
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
  ];
};

export default useAppInit;
