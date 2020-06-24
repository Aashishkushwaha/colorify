import React, { useState, useContext, useEffect } from "react";
import CopyContext from "../context/CopyContext";
import SavedPalleteItemsContext from "../context/SavedPalleteItemsContext";
import openedLock from "../assets/img/opened_lock_black.svg";
import closedLock from "../assets/img/closed_lock_black.svg";

const ShadesPalleteItem = ({
  disableLock,
  background,
  index,
  removeSavedPalleteItem,
}) => {
  const { copyColor, getHexCode } = useContext(CopyContext);
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
    padding: "0",
    alignItems: "center",
    background: originalBackground,
    cursor: "pointer",
  };
  let assignedClasses = ["pallete-item", "rounded"];

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
    <div
      className={assignedClasses.join(" ")}
      style={{ paddingBottom: "2.8rem" }}
    >
      <div style={style}>
        {!disableLock && (
          <span
            style={{
              marginBottom: ".4rem",
            }}
            className="lock__unlock rounded"
            onClick={(e) => {
              e.stopPropagation();
              setIsLocked(!isLocked);
            }}
          >
            <img
              style={{
                opacity: !isLocked ? 0.5 : 1,
                height: "2rem",
              }}
              src={isLocked ? closedLock : openedLock}
              alt="locked/unlocked"
            />
          </span>
        )}
        {new Array(10).fill(1).map((el, index) => (
          <span
            key={index}
            onClick={(event) =>
              handler(
                event,
                "#" +
                  getHexCode(originalBackground[0]) +
                  getHexCode(originalBackground[1]) +
                  getHexCode(originalBackground[2]) +
                  Math.floor(((index + 1) / 10) * 255).toString(16)
              )
            }
            style={{
              fontWeight: "700",
              padding: ".5rem",
              display: "block",
              width: "100%",
              background: `rgb(${originalBackground[0]}, ${
                originalBackground[1]
              }, ${originalBackground[2]}, ${(index + 1) / 10})`,
            }}
          >
            #
            {getHexCode(originalBackground[0]) +
              getHexCode(originalBackground[1]) +
              getHexCode(originalBackground[2]) +
              Math.floor(((index + 1) / 10) * 255).toString(16)}
          </span>
        ))}
        <span
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "20",
          }}
          className="pallete-item__save"
          onClick={(e) => {
            return removeSavedPalleteItem
              ? deleteHandler(e, index)
              : savedHandler(e);
          }}
        >
          {removeSavedPalleteItem ? "-" : "+"}
        </span>
        <span
          style={{ bottom: "-2.5rem" }}
          className={savedSpanClasses.join(" ")}
        >
          Saved
        </span>
        <span
          style={{ bottom: "-2.5rem" }}
          className={copiedSpanClasses.join(" ")}
        >
          Copied
        </span>
      </div>
    </div>
  );
};

export default ShadesPalleteItem;
