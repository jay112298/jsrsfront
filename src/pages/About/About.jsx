import React from "react";
import Intro from "../../components/Intro/Intro";
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
  return (
    <>
      <Navbar />    
      <Intro inp={"About Page"} />
    </>
  );
};

export default About;
