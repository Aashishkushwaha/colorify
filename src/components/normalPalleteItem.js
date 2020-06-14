import React, { useState, useContext, useEffect } from "react";
import CopyContext from "../context/CopyContext";

const NormalPalleteItem = (props) => {
  const { copyColor } = useContext(CopyContext);
  let style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: props.gradient ? "space-between" : "center",
    alignItems: "center",
    background: props.background,
  };
  let assignedClasses = ["pallete-item", "rounded", "rotate", props.rotate];
  let [copiedSpanClasses, setCopiedSpanClasses] = useState([
    "copied",
    "copied-down",
  ]);
  let [hasShowClass, setHasShowClass] = useState(false);

  useEffect(() => {
    !hasShowClass
      ? setCopiedSpanClasses(["copied", "copied-down"])
      : setCopiedSpanClasses(["copied", "copied-down", "show-down"]);
  }, [hasShowClass]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setHasShowClass(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [copiedSpanClasses]);

  const handler = async (event, color) => {
    // !hasShowClass ? setHasShowClass(true) : setHasShowClass(false);
    setHasShowClass(true);
    copyColor(color);
  };

  return (
    <div className={assignedClasses.join(" ")}>
      <div style={style} onClick={(event) => handler(event, props.background)}>
        <span className={copiedSpanClasses.join(" ")}>Copied</span>
      </div>
      <span style={{ color: props.background }}>{props.background}</span>
    </div>
  );
};

/**#48b124
 *
 *
 */
export default NormalPalleteItem;
