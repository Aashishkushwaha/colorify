import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/homeComonent";
import NavBar from "./components/navBarComponent";
import Footer from "./components/footer";
import PageNotFound from "./components/pageNotFound";
import NormalPalleteRow from "./components/normalPalleteRow";
import GradientPalleteRow from "./components/gradientPalleteRow";
import useAppInit from "./hooks/useAppSetup";
import CopyContext from "./context/CopyContext";

import "./styles.css";

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
          <h3 className="heading mt-3">Colorify</h3>
          <span className="heading mb-1 inline-block">
            Perfect destination for delightful colors.
          </span>
          <Switch>
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
            <Route component={PageNotFound}></Route>
          </Switch>
          <Footer />
        </div>
      </CopyContext.Provider>
    </Router>
  );
}
