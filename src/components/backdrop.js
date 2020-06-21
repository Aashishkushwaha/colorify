import React from "react";

export default ({ onClickHandler }) => {
  return <div className="backdrop" onClick={onClickHandler}></div>;
};
