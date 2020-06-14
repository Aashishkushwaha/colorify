import React from "react";
import { Link } from "react-router-dom";
import NormalPalleteItem from "./normalPalleteItem";
import GradientPalleteItem from "./gradientPalleteItem";

export default (props) => {
  return (
    <div className="home-grid">
      <div>
        <NormalPalleteItem background="dodgerblue" />
        <h2
          style={{
            color: "dodgerblue",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Link className="main-header__list-item" to="/normal">
            ► Discover Normal Colors
          </Link>
        </h2>
      </div>
      <div>
        <GradientPalleteItem
          primaryBackground="dodgerblue"
          secondaryBackground="tomato"
        />
        <h2
          style={{
            background: `linear-gradient(to right, dodgerblue, tomato)`,
            color: "transparent",
            WebkitBackgroundClip: "text",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Link className="main-header__list-item" to="/gradient">
            ► Discover Gradient Colors
          </Link>
        </h2>
      </div>
    </div>
  );
};
