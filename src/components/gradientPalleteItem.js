import React, { useContext, useState, useEffect } from "react";
import CopyContext from "../context/CopyContext";

const GradientPalleteItem = ({
  primaryBackground,
  secondaryBackground,
  rotate
}) => {
  const { copyColor } = useContext(CopyContext);
  let style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    background: `linear-gradient(to bottom right, ${primaryBackground}, ${secondaryBackground})`
  };
  let assignedClasses = ["pallete-item", "rounded", "rotate", rotate];

  let [copiedLowerSpanClasses, setCopiedLowerSpanClasses] = useState([
    "copied",
    "copied-down"
  ]);
  let [copiedUpperSpanClasses, setCopiedUpperSpanClasses] = useState([
    "copied",
    "copied-up"
  ]);
  let [lowerSpanHasShowClass, setLowerSpanHasShowClass] = useState(false);
  let [upperSpanHasShowClass, setUpperSpanHasShowClass] = useState(false);

  useEffect(() => {
    !lowerSpanHasShowClass
      ? setCopiedLowerSpanClasses(["copied", "copied-down"])
      : setCopiedLowerSpanClasses(["copied", "copied-down", "show-down"]);
  }, [lowerSpanHasShowClass]);

  useEffect(() => {
    !upperSpanHasShowClass
      ? setCopiedUpperSpanClasses(["copied", "copied-up"])
      : setCopiedUpperSpanClasses(["copied", "copied-up", "show-up"]);
  }, [upperSpanHasShowClass]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setUpperSpanHasShowClass(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [copiedUpperSpanClasses]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLowerSpanHasShowClass(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [copiedLowerSpanClasses]);

  const handler = async (event, color, copyType) => {
    // !lowerSpanHasShowClass ? setLowerSpanHasShowClass(true) : setLowerSpanHasShowClass(false);
    copyType === "lower"
      ? setLowerSpanHasShowClass(true)
      : setUpperSpanHasShowClass(true);
    copyColor(color);
  };

  return (
    <div className={assignedClasses.join(" ")}>
      <span
        onClick={event => handler(event, primaryBackground, "upper")}
        style={{ color: primaryBackground }}
      >
        {primaryBackground}
      </span>
      <div style={style}>
        <span className={copiedUpperSpanClasses.join(" ")}>Copied</span>
        <span className={copiedLowerSpanClasses.join(" ")}>Copied</span>
      </div>
      <span
        onClick={event => handler(event, secondaryBackground, "lower")}
        style={{ color: secondaryBackground }}
      >
        {secondaryBackground}
      </span>
    </div>
  );
};

export default GradientPalleteItem;
