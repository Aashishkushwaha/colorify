import React from "react";

const SavedPalleteItemsContext = React.createContext({
  savedPalleteItems: [],
  setSavedPalleteItems: () => {},
});

export default SavedPalleteItemsContext;
