import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/navBarComponent";
import Footer from "./components/footer";
import PageNotFound from "./components/pageNotFound";

import useAppInit from "./hooks/useAppSetup";
import CopyContext from "./context/CopyContext";
import SavedPalleteItemsContext from "./context/SavedPalleteItemsContext";
import "./styles.css";
import SideBar from "./components/sideBar";

const Home = React.lazy(() => import("./components/homeComonent"));

const Backdrop = React.lazy(() => import("./components/backdrop"));

const SavedPalleteItems = React.lazy(() =>
  import("./components/savedPalleteItems")
);

const NormalPalleteRow = React.lazy(() =>
  import("./components/normalPalleteRow")
);
const GradientPalleteRow = React.lazy(() =>
  import("./components/gradientPalleteRow")
);

const ShadesPalleteRow = React.lazy(() =>
  import("./components/shadesPalleteRow")
);

const CustomPalleteItem = React.lazy(() =>
  import("./components/customPalleteItem")
);

export default function App(props) {
  const [
    showSideBar,
    drawerHandler,
    getHexCode,
    copyColor,
    normalPalleteRotate,
    currentNormalPallete,
    generatePallete,
    currentGradientPallete,
    savedPalleteItems,
    setSavedPalleteItems,
    currentShadesPallete,
  ] = useAppInit();

  return (
    <Router>
      {<SideBar showSideBar={showSideBar} />}
      {showSideBar && (
        <>
          <Suspense fallback={<h1 className="heading">Backdrop</h1>}>
            <Backdrop onClickHandler={drawerHandler} />
          </Suspense>
        </>
      )}

      <NavBar showSideBar={showSideBar} onClickHandler={drawerHandler} />
      <SavedPalleteItemsContext.Provider
        value={{ savedPalleteItems, setSavedPalleteItems }}
      >
        <CopyContext.Provider value={{ copyColor, getHexCode }}>
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
              <Route path="/shades">
                <Suspense fallback={<h1 className="heading">Loading...</h1>}>
                  <ShadesPalleteRow
                    currentShadesPallete={currentShadesPallete}
                    generatePallete={generatePallete}
                  />
                </Suspense>
              </Route>
              <Route path="/custom">
                <Suspense fallback={<h1 className="heading">Loading...</h1>}>
                  <CustomPalleteItem />
                </Suspense>
              </Route>
              <Route path="/saved">
                <Suspense fallback={<h1 className="heading">Loading...</h1>}>
                  <SavedPalleteItems palletes={savedPalleteItems} />
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
      </SavedPalleteItemsContext.Provider>
    </Router>
  );
}
