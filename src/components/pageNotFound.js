import React from "react";

const pageNotFound = ({ match, location, history }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "75vh",
      }}
    >
      <h1 className="heading">
        Error 404 : Page {location.pathname} doesn't found.
      </h1>
    </div>
  );
};

export default pageNotFound;
