import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Dashboard.st.js";
import Home from "./Home/Home";
import { useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  Badge,
  IconButton,
  CssBaseline,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Dashboard = () => {
  
  return (
    <>
      {/* <Wrapper>
        <div className="menu">
          <div className="child">Home</div>
          <div className="child">Profile</div>
          <div className="child">Events</div>
          <div className="child">Friends</div>
          <div className="child">Report Problem</div>
          <div className="child">Temples</div>
          <div className="child">Tickets</div>
        </div>
        <div className="content">Content</div>
        <Home className="content" />
        <div className="content2">Content2</div>
        <div className="sidebar">Sidebar</div>
      </Wrapper> */}
     
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item sm={6}>
              <InputBase placeholder="Search Topics" />
            </Grid>
            <Grid item sm={6}>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNoneIcon />
                </Badge>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <CssBaseline />
    </>
  );
};

export default Dashboard;
