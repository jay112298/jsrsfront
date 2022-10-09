import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import ramji from "../../assets/ramji.jpg";
import "./Signin.css";
import { isAuthenticated } from "../../../auth/helper/index";
import { AiOutlineLoading3Quarters } from "react-icons/Ai";
import { Button } from "@mui/material";

const Signin = () => {
  const [regStatus, setRegStatus] = useState({
    error: "",
    loading: false,
    didRedirect: false,
  });

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password, error, loading, didRedirect } = values;

  function handleChange(event) {
    setValues((prevFormData) => {
      let name = event.target.name;
      return {
        ...prevFormData,
        [name]: event.target.value,
      };
    });
  }

  const login = async (event) => {
    event.preventDefault();

    setRegStatus((prevRegStatus) => {
      return {
        ...prevRegStatus,
        loading: true,
      };
    });

    const { email, password } = values;

    const res = await fetch("https://jsrs.azurewebsites.net/api/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    let data = await res.json();

    if (res.status == 422 || !res) {
      let err = data.error.toUpperCase();
      setRegStatus((prevRegStatus) => {
        return {
          ...prevRegStatus,
          loading: false,
          error: err,
        };
      });
    } else if (res.status == 400 || res.status == 401) {
      // window.alert("Email and password does not match");
      setRegStatus((prevRegStatus) => {
        return {
          ...prevRegStatus,
          loading: false,
          error: "Email and password does not match",
        };
      });
    } else {
      // window.alert(`Huurah, you got in successfully!`);
      console.log(data);
      localStorage.setItem("jwt", JSON.stringify(data));
      setRegStatus((prevRegStatus) => {
        return {
          ...prevRegStatus,
          didRedirect: true,
        };
      });
    }
  };

  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     setRegStatus((prevRegStatus) => {
  //       return {
  //         ...prevRegStatus,
  //         didRedirect: true,
  //       };
  //     });
  //   }
  // });

  return (
    <div className="container">
      {regStatus.didRedirect && <Navigate to="/dashboard" replace={true} />}
      <div className="box">
        <div className="img-container">
          <img className="img" src={ramji} alt="" />
        </div>
        <div className="form-section">
          <h2 className="title">Login to an account</h2>
          <form className="form">
            {regStatus.error && (
              <label htmlFor="email">{regStatus.error}</label>
            )}
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
            />
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
            />
          </form>
          <button onClick={login} className="next">
            {regStatus.loading && (
              <AiOutlineLoading3Quarters className="loading" />
            )}
            {!regStatus.loading && "Login"}
          </button>
          <Button variant="contained" className="next" color="error">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
