import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Blog from "./components/pages/Blog/Blog";
import Contact from "./components/pages/Contact/Contact";
import About from "./components/pages/About/About";
import Signup from "./components/pages/Signup/Signup";
import Signin from "./components/pages/Signin/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Profile from "./components/pages/Dashboard/Profile/Profile";
import Events from "./components/pages/Dashboard/Events/Events";
import Friends from "./components/pages/Dashboard/Friends/Friends";
import Problem from "./components/pages/Dashboard/Problem/Problem";
import Temples from "./components/pages/Dashboard/Temples/Temples";
import Tickets from "./components/pages/Dashboard/Tickets/Tickets";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
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
  );
};

export default App;
