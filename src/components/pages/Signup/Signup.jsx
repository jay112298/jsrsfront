import React, { useState } from "react";
import ramji from "../../../assets/ramji.jpg";
import "./Signup.css";
import { TbNumber1, TbNumber2 } from "react-icons/Tb";
import { GoChevronRight } from "react-icons/Go";

const Signup = () => {
  const [page, setPage] = useState(false);

  const changePage = () => {
    setPage(!page);
  };

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    username: "",
    jsrsId: "",
    gender: "",
    age: "",
    email: "",
    profession: "",
    phone: "",
    address: "",
    password: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function setMale() {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        gender: "Male",
      };
    });
  }
  function setFemale() {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        gender: "Female",
      };
    });
  }

  return (
    <div className="container">
      <div className="box">
        <div className="img-container">
          <img className="img" src={ramji} alt="" />
        </div>
        <div className="form-section">
          <h2 className="title">Create an account</h2>
          <form className={page ? "form invisible" : "form"}>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              onChange={handleChange}
              placeholder="Lastname"
              name="lastname"
            />
            <input
              type="text"
              onChange={handleChange}
              placeholder="Username"
              name="username"
            />
            <input
              type="text"
              onChange={handleChange}
              placeholder="Ramdoot ID"
              name="jsrsId"
            />
            <fieldset>
              <legend>Gender</legend>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onClick={setMale}
              />
              <label htmlFor="male">Male</label>
              <br />

              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onClick={setFemale}
              />
              <label htmlFor="female">Female</label>
              <br />

              <br />
            </fieldset>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Age"
              name="age"
            />
          </form>
          <form className={page ? "form" : "form invisible"}>
            <input
              onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Profession"
              name="profession"
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Phone"
              name="phone"
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Address"
              name="address"
            />
            <input
              onChange={handleChange}
              type="password"
              placeholder="Password"
              name="password"
            />
          </form>
          <button className={page ? "next" : "next"} onClick={changePage}>
            {page ? "Prev" : "Next"}
          </button>
          <button
            className={page ? "next" : "next invisible"}
            onClick={changePage}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
