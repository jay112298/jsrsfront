import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Dashboard.st.js";
import Home from "./Home/Home";

const Dashboard = () => {
  return (
    <>
      <Wrapper>
        <div className="menu">
          <div className="child">Home</div>
          <div className="child">Profile</div>
          <div className="child">Events</div>
          <div className="child">Friends</div>
          <div className="child">Report Problem</div>
          <div className="child">Temples</div>
          <div className="child">Tickets</div>
        </div>
        {/* <div className="content">Content</div> */}
        <Home className="content" />
        <div className="content2">Content2</div>
        {/* <div className="sidebar">Sidebar</div> */}
      </Wrapper>
    </>
  );
};

export default Dashboard;
