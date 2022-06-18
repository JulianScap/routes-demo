import React from "react";
import { Link, Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <React.Fragment>
      <br />
      Settings
      <br />
      <Link to="setting1">setting1</Link>
      <br />
      <Link to="setting2">setting2</Link>
      <br />
      <Outlet />
    </React.Fragment>
  );
};

export default Settings;
