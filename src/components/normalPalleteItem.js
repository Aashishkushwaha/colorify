import React, { useState, useContext, useEffect } from "react";
import CopyContext from "../context/CopyContext";
import SavedPalleteItemsContext from "../context/SavedPalleteItemsContext";
import openedLock from "../assets/img/opened_lock.svg";
import closedLock from "../assets/img/closed_lock.svg";

const NormalPalleteItem = ({
  disableLock,
  background,
  rotate,
  index,
  removeSavedPalleteItem,
}) => {
  const { copyColor } = useContext(CopyContext);
  const { savedPalleteItems, setSavedPalleteItems } = useContext(
    SavedPalleteItemsContext
  );
  const [isLocked, setIsLocked] = useState(false);
  let [originalBackground, setOriginalBackground] = useState("");
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

  let style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: originalBackground,
    cursor: "pointer",
  };
  let assignedClasses = ["pallete-item", "rounded", "rotate"];
  if (!isLocked) assignedClasses.push(rotate);

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

  useEffect(() => {
    if (!isLocked) setOriginalBackground(background);
  }, [background, isLocked]);

  const savedHandler = (event) => {
    event.stopPropagation();
    setHasSavedClass(true);
    setSavedPalleteItems([...savedPalleteItems, [background]]);
    localStorage.setItem(
      "savedPalleteItems",
      JSON.stringify([...savedPalleteItems, [background]])
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
      <div
        style={style}
        onClick={(event) => handler(event, originalBackground)}
      >
        {!disableLock && (
          <span
            className="lock__unlock"
            onClick={(e) => {
              e.stopPropagation();
              setIsLocked(!isLocked);
            }}
          >
            <img
              style={{
                opacity: !isLocked ? 0.5 : 1,
              }}
              src={isLocked ? closedLock : openedLock}
              alt="locked/unlocked"
            />
          </span>
        )}
        <span
          className="pallete-item__save"
          onClick={(e) => {
            return removeSavedPalleteItem
              ? deleteHandler(e, index)
              : savedHandler(e);
          }}
        >
          {removeSavedPalleteItem ? "-" : "+"}
        </span>
        <span className={savedSpanClasses.join(" ")}>Saved</span>
        <span className={copiedSpanClasses.join(" ")}>Copied</span>
      </div>
      <span style={{ color: "#414141" }}>{originalBackground}</span>
    </div>
  );
};

export default NormalPalleteItem;
