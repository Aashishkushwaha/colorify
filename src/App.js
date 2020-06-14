import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import NormalPalleteRow from "./components/normalPalleteRow";
import GradientPalleteRow from "./components/gradientPalleteRow";
import CopyContext from "./context/CopyContext";

import "./styles.css";
import Home from "./components/Home";
import useAppInit from "./hooks/useAppSetup";

export default function App(props) {
  const [
    copyColor,
    normalPalleteRotate,
    currentNormalPallete,
    generatePallete,
    currentGradientPallete,
  ] = useAppInit();

  return (
    <Router>
      <NavBar />
      <CopyContext.Provider value={{ copyColor }}>
        <div className="App">
          <h3 className="heading mb-1 mt-3">Colorify</h3>
          <Route path="/normal">
            <NormalPalleteRow
              normalPalleteRotate={normalPalleteRotate}
              currentNormalPallete={currentNormalPallete}
              generatePallete={generatePallete}
            />
          </Route>
          <Route path="/gradient">
            <GradientPalleteRow
              currentGradientPallete={currentGradientPallete}
              generatePallete={generatePallete}
            />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </div>
      </CopyContext.Provider>
    </Router>
  );
}
