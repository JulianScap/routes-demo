import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      Layout
      <br />
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
