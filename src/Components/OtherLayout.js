import React from "react";
import { Outlet } from "react-router-dom";

const OtherLayout = () => {
  return (
    <React.Fragment>
      OtherLayout
      <br />
      <Outlet />
    </React.Fragment>
  );
};

export default OtherLayout;
