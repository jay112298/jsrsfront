import React, {useState} from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isMenu, setIsMenu] = useState(false)
  const changeButton = () => {
  setIsMenu(!isMenu)
  }

  return (
    <nav className="header">
      <img src={Logo} alt="Logo" className="logo"/>

      <div className={isMenu ? "navbar active" : "navbar"}>
        <ul className="navbar-list active">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/blog" className="navbar-link">Blog</Link></li>
          <li><Link to="/about" className="navbar-link">About</Link></li>
          <li><Link to="/contact" className="navbar-link">Contact</Link></li>
          <li className="navbar-link"><button className="login-btn">Login</button></li>
        </ul>
      </div>
      <div className="mobile-navbar-btn" onClick={changeButton}>
        {isMenu ? (
          <CgCloseR name="menu-outline" className="mobile-nav-icon" />
          ) : (
          <CgMenu name="menu-outline" className="mobile-nav-icon" />
        )}
        {/* <CgMenu name="menu-outline" className="mobile-nav-icon"/> */}
        {/* <CgCloseR name="close-outline" className="mobile-nav-icon close-outline" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
