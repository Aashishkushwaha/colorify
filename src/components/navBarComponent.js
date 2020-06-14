import React from "react";
import { NavLink, Link } from "react-router-dom";

export default (props) => {
  return (
    <header className="main-header">
      <nav className="main-header__nav">
        <h2>
          <Link className="main-header__list-item" to="/">
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
            <NavLink className="main-header__list-item" to="/saved">
              Saved
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
