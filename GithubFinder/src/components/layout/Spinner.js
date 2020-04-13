import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export const Spinner = () => {
  // Emmet "rcfa" or "racf"
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
