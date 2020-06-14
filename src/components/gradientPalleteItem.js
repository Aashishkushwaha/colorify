import React, { useContext, useState, useEffect } from "react";
import CopyContext from "../context/CopyContext";
import SavedPalleteItemsContext from "../context/SavedPalleteItemsContext";

const GradientPalleteItem = ({
  primaryBackground,
  secondaryBackground,
  removeSavedPalleteItem,
  index,
}) => {
  const { copyColor } = useContext(CopyContext);
  const { savedPalleteItems, setSavedPalleteItems } = useContext(
    SavedPalleteItemsContext
  );

  let style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    background: `linear-gradient(to bottom right, ${primaryBackground}, ${secondaryBackground})`,
  };
  let assignedClasses = ["pallete-item", "rounded"];

  const [palleteClasses, setPalleteClasses] = useState(["shutter"]);
  let [copiedLowerSpanClasses, setCopiedLowerSpanClasses] = useState([
    "copied",
    "copied-down",
  ]);
  let [copiedUpperSpanClasses, setCopiedUpperSpanClasses] = useState([
    "copied",
    "copied-up",
  ]);
  let [savedSpanClasses, setSavedSpanClasses] = useState([
    "copied",
    "copied-down",
  ]);

  let [lowerSpanHasShowClass, setLowerSpanHasShowClass] = useState(false);
  let [upperSpanHasShowClass, setUpperSpanHasShowClass] = useState(false);
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

  const savedHandler = (event) => {
    setSavedPalleteItems([
      ...savedPalleteItems,
      [primaryBackground, secondaryBackground],
    ]);
    localStorage.setItem(
      "savedPalleteItems",
      JSON.stringify([
        ...savedPalleteItems,
        [primaryBackground, secondaryBackground],
      ])
    );
    event.stopPropagation();
    setHasSavedClass(true);
  };

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
    copyType === "lower"
      ? setLowerSpanHasShowClass(true)
      : setUpperSpanHasShowClass(true);
    copyColor(color);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setPalleteClasses(["shutter show-shutter"]);
    }, 50);

    return () => {
      setPalleteClasses(["shutter"]);
      clearTimeout(timer);
    };
  }, [primaryBackground, secondaryBackground]);

  const deleteHandler = (event, index) => {
    let newArray = savedPalleteItems.filter(
      (item, currentIndex) => currentIndex !== index
    );
    setSavedPalleteItems(newArray);
    localStorage.setItem("savedPalleteItems", JSON.stringify(newArray));
    event.stopPropagation();
  };

  return (
    <div className={assignedClasses.join(" ")} style={{ position: "relative" }}>
      <span
        onClick={(event) => handler(event, primaryBackground, "upper")}
        style={{ color: primaryBackground }}
      >
        {primaryBackground}
      </span>
      <div style={style}>
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
        <span className={palleteClasses.join(" ")} />
        <span className={savedSpanClasses.join(" ")}>Saved</span>
        <span className={copiedUpperSpanClasses.join(" ")}>Copied</span>
        <span className={copiedLowerSpanClasses.join(" ")}>Copied</span>
      </div>
      <span
        onClick={(event) => handler(event, secondaryBackground, "lower")}
        style={{ color: secondaryBackground }}
      >
        {secondaryBackground}
      </span>
    </div>
  );
};

export default GradientPalleteItem;
