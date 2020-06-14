import React from "react";

const footer = (porps) => {
  return (
    <div className="footer">
      <h3>
        Crafted with{" "}
        <span role="img" aria-label="blue heart">
          💙
        </span>{" "}
        and React.
      </h3>
      <p>
        Designed by{" "}
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/aashish-kushwaha-338385168/"
          target="_blank"
        >
          Aashish Kushwaha
        </a>
      </p>
    </div>
  );
};

export default footer;
