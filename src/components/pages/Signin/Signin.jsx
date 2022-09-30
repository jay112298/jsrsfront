import React, {useState} from "react";
import ramji from "../../../assets/ramji.jpg";
import "./Signin.css";


const Signup = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="img-container"><img className="img" src={ramji} alt="" /></div>
        <div className="form-section">
          <h2 className="title">Login to an account</h2>
          <form className="form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" /> 
          </form>
          <button className="next">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;