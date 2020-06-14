import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/navBarComponent";
import Footer from "./components/footer";
import PageNotFound from "./components/pageNotFound";

import useAppInit from "./hooks/useAppSetup";
import CopyContext from "./context/CopyContext";
import "./styles.css";

const Home = React.lazy(() => import("./components/homeComonent"));

const NormalPalleteRow = React.lazy(() =>
  import("./components/normalPalleteRow")
);
const GradientPalleteRow = React.lazy(() =>
  import("./components/gradientPalleteRow")
);

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
              <Suspense fallback={<h1 className="heading">Loading...</h1>}>
                <NormalPalleteRow
                  normalPalleteRotate={normalPalleteRotate}
                  currentNormalPallete={currentNormalPallete}
                  generatePallete={generatePallete}
                />
              </Suspense>
            </Route>
            <Route path="/gradient">
              <Suspense fallback={<h1 className="heading">Loading...</h1>}>
                <GradientPalleteRow
                  currentGradientPallete={currentGradientPallete}
                  generatePallete={generatePallete}
                />
              </Suspense>
            </Route>
            <Route path="/saved">
              <Suspense fallback={<h1 className="heading">Loading...</h1>}>
                <h1>Saved</h1>
              </Suspense>
            </Route>
            <Route path="/" exact>
              <Suspense fallback={<h1 className="heading">Loading...</h1>}>
                <Home />
              </Suspense>
            </Route>
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </CopyContext.Provider>
    </Router>
  );
}
