import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      Menu shared by all the pages
      <br />
      <Link to="content1">content1</Link>
      <br />
      <span
        onClick={() => {
          const d = new Date();
          let seconds = d.getSeconds();
          if (seconds > 30) {
            console.log("You can go", seconds);
            navigate("content2");
          } else {
            console.log("You cannot go", seconds);
          }
        }}
      >
        content2
      </span>
      <br />
      <br />
      <Link to="settings">settings</Link>
      <br />
      <Outlet />
    </React.Fragment>
  );
};

export default MainPage;
