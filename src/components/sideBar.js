import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import mainLogo from "../assets/img/main-logo.svg";
import SavedPalleteItemsContext from "../context/SavedPalleteItemsContext";

const SideBar = ({ showSideBar }) => {
  const { savedPalleteItems } = useContext(SavedPalleteItemsContext);
  let assignedClasses = showSideBar ? ["sidebar show-sidebar"] : ["sidebar"];

  return (
    <ul className={assignedClasses.join(" ")}>
      <li style={{ marginBottom: "1rem", fontWeight: "800" }}>
        <Link to="/">
          <img
            style={{ height: "1rem", margin: "0 .3rem" }}
            src={mainLogo}
            alt="img"
          />
          Colorify
        </Link>
      </li>
      <li>
        <NavLink className="" to="/normal">
          Normal
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/gradient">
          Gradient
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/shades">
          Shades
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/custom">
          Custom
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/saved">
          <span>Saved</span>
          <span
            style={{
              marginLeft: ".2rem",
              background: "#3f51b5",
              borderRadius: ".3rem",
              color: "#fff",
            }}
          >
            ({savedPalleteItems.length})
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default SideBar;
