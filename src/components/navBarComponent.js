import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import mainLogo from "../assets/img/main-logo.svg";
import SavedPalleteItemsContext from "../context/SavedPalleteItemsContext";

/**
 * Environment property file
 * dev - dev
 * UAT - business people ()
 * Prod -
 *
 *
 * Unit test cases in React
 */

export default ({ onClickHandler }) => {
  const { savedPalleteItems } = useContext(SavedPalleteItemsContext);

  return (
    <header className="main-header">
      <div onClick={onClickHandler}>
        <span className="hamberger"></span>
      </div>
      <nav className="main-header__nav">
        <h2>
          <Link
            className="main-header__list-item"
            to="/"
            style={{ color: "#e1e1e1" }}
          >
            <img
              style={{ height: "1rem", margin: "0 .3rem" }}
              src={mainLogo}
              alt="img"
            />
            Colorify
          </Link>
        </h2>
        <ul className="main-header__items-list">
          <li>
            <NavLink className="main-header__list-item" to="/normal">
              Normal
            </NavLink>
          </li>
          <li>
            <NavLink className="main-header__list-item" to="/gradient">
              Gradient
            </NavLink>
          </li>
          <li>
            <NavLink className="main-header__list-item" to="/shades">
              Shades
            </NavLink>
          </li>
          <li>
            <NavLink className="main-header__list-item" to="/custom">
              Custom
            </NavLink>
          </li>
          <li>
            <NavLink className="main-header__list-item" to="/saved">
              <span
                style={{
                  position: "relative",
                }}
              >
                Saved
                <span
                  style={{
                    position: "absolute",
                    top: "-1rem",
                    right: "-1rem",
                    background: "#3f51b5",
                    color: "#fff",
                    borderRadius: ".3rem",
                  }}
                >
                  ({savedPalleteItems.length})
                </span>
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
