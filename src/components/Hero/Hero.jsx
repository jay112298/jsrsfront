import React from "react";
import { Link } from "react-router-dom";
import { Section } from "./Hero.st.js";

const Hero = (props) => {
  return (
    <Section>
        <div className="left">
            <div className="title">JSRS Nagpur</div>
            <div className="tagline">City unit of Jai ShriRam Sena.Our vision is to engage more people in the fight for better Life and Society as a ramrajya.</div>
        </div>
        <div className="right"></div>
    </Section>
  );
};

export default Hero;
