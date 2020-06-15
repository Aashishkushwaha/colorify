import React from "react";
import { Link } from "react-router-dom";
import NormalPalleteItem from "./normalPalleteItem";
import GradientPalleteItem from "./gradientPalleteItem";

export default (props) => {
  return (
    <div className="home-grid">
      <div>
        <NormalPalleteItem background="#d9d087" />
        <h2
          style={{
            color: "#d9d087",
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
          primaryBackground="#61f3c3"
          secondaryBackground="#4772b2"
        />
        <h2
          style={{
            background: `linear-gradient(to right, #61f3c3, #4772b2)`,
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
