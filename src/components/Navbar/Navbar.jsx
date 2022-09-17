import React, { useState } from "react";
import './Navbar.css'
import Logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo"><img className="logo" src={Logo} /></div>
      <div className="nav">
        <ul className="nav-list">
          <li className="list-items">HOME</li>
          <li className="list-items">BLOG</li>
          <li className="list-items">ABOUT</li>
          <li className="list-items">CONTACT</li>
          <button className="login-btn">LOGIN</button>
        </ul>
        
      </div>
    </nav>
  )
}

export default Navbar;
