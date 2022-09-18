import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo"/>

      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-link">Home</li>
          <li className="navbar-link">Blog</li>
          <li className="navbar-link">About</li>
          <li className="navbar-link">Contact</li>
          <li className="navbar-link "><button className="login-btn">Login</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
