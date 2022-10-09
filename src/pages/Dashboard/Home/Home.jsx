import React from "react";
import { Container } from "./Home.st.js";
import { isAuthenticated } from "../../../../auth/helper/index";
import { AppBar, Toolbar, Grid } from "@mui/material";

const Home = () => {
  let authStatus = isAuthenticated();
  console.log(authStatus);

  return (
    // <Container>
    //   <div>
    //     <div>Name: {authStatus.user.name + " " + authStatus.user.lastname}</div>
    //     <div></div>
    //     <div></div>
    //   </div>
    //   <div>2</div>
    //   <div>3</div>
    //   <div>4</div>
    //   <div>5</div>
    //   <div>6</div>
    //   <div>7</div>
    //   <div>8</div>
    // </Container>
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item sm={6}></Grid>
          <Grid item sm={6}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Home;
