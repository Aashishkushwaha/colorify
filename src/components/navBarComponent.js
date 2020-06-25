import React from "react";
import { NavLink, Link } from "react-router-dom";
import mainLogo from "../assets/img/main-logo.svg";

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
  return (
    <header className="main-header">
      <div onClick={onClickHandler}>
        <span className="hamberger"></span>
      </div>
      <nav className="main-header__nav">
        <h2>
          <Link className="main-header__list-item" to="/">
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
              Saved
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
