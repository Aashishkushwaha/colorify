import React from "react";

const footer = (porps) => {
  return (
    <div className="footer">
      <span style={{ fontWeight: 600 }}>
        Crafted with{" "}
        <span role="img" aria-label="blue heart">
          💙
        </span>{" "}
        and React.
      </span>
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
