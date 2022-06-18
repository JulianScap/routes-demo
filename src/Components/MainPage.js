import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <React.Fragment>
      Menu shared by all the pages
      <br />
      <Link to="content1">content1</Link>
      <br />
      <Link to="content2">content2</Link>
      <br />
      <br />
      <Link to="settings">settings</Link>
      <br />
      <Outlet />
    </React.Fragment>
  );
};

export default MainPage;
