import React, { useState, useContext, useEffect } from "react";
import CopyContext from "../context/CopyContext";
import SavedPalleteItemsContext from "../context/SavedPalleteItemsContext";

const NormalPalleteItem = (props) => {
  const { copyColor } = useContext(CopyContext);
  const { savedPalleteItems, setSavedPalleteItems } = useContext(
    SavedPalleteItemsContext
  );

  let style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: props.gradient ? "space-between" : "center",
    alignItems: "center",
    background: props.background,
    cursor: "pointer",
  };
  let assignedClasses = ["pallete-item", "rounded", "rotate", props.rotate];
  let [copiedSpanClasses, setCopiedSpanClasses] = useState([
    "copied",
    "copied-down",
  ]);
  let [savedSpanClasses, setSavedSpanClasses] = useState([
    "copied",
    "copied-down",
  ]);
  let [hasShowClass, setHasShowClass] = useState(false);
  let [hasSavedClass, setHasSavedClass] = useState(false);

  useEffect(() => {
    !hasSavedClass
      ? setSavedSpanClasses(["copied", "copied-down"])
      : setSavedSpanClasses(["copied", "copied-down", "show-down"]);
  }, [hasSavedClass]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setHasSavedClass(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [savedSpanClasses]);

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

  const savedHandler = (event) => {
    event.stopPropagation();
    setHasSavedClass(true);
    setSavedPalleteItems([...savedPalleteItems, [props.background]]);
    localStorage.setItem(
      "savedPalleteItems",
      JSON.stringify([...savedPalleteItems, [props.background]])
    );
  };

  const handler = (event, color) => {
    setHasShowClass(true);
    copyColor(color);
  };

  const deleteHandler = (event, index) => {
    let newArray = savedPalleteItems.filter(
      (item, currentIndex) => currentIndex !== index
    );
    localStorage.setItem("savedPalleteItems", JSON.stringify(newArray));
    setSavedPalleteItems(newArray);
    event.stopPropagation();
  };

  return (
    <div className={assignedClasses.join(" ")}>
      <div style={style} onClick={(event) => handler(event, props.background)}>
        <span
          className="pallete-item__save"
          onClick={(e) => {
            return props.removeSavedPalleteItem
              ? deleteHandler(e, props.index)
              : savedHandler(e);
          }}
        >
          {props.removeSavedPalleteItem ? "-" : "+"}
        </span>
        <span className={savedSpanClasses.join(" ")}>Saved</span>
        <span className={copiedSpanClasses.join(" ")}>Copied</span>
      </div>
      <span style={{ color: props.background }}>{props.background}</span>
    </div>
  );
};

export default NormalPalleteItem;
