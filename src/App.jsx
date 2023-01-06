import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile/Profile";
import Events from "./pages/Dashboard/Events/Events";
import Friends from "./pages/Dashboard/Friends/Friends";
import Problem from "./pages/Dashboard/Problem/Problem";
import Temples from "./pages/Dashboard/Temples/Temples";
import Tickets from "./pages/Dashboard/Tickets/Tickets";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5722",
      light: "#FFCCBC",
    },
    secondary: {
      main: "#757575",
      light: "#757575",
    },
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/profile" element={<Profile />}></Route>
          <Route path="/dashboard/events" element={<Events />}></Route>
          <Route path="/dashboard/friends" element={<Friends />}></Route>
          <Route path="/dashboard/report-problem" element={<Problem />}></Route>
          <Route path="/dashboard/temples" element={<Temples />}></Route>
          <Route path="/dashboard/tickets" element={<Tickets />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
