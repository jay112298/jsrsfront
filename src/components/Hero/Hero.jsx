import React from "react";
import { Link } from "react-router-dom";
import { Section } from "./Hero.st.js";

const Hero = (props) => {
  return (
    <Section>
        <div className="left">
            <div className="title">JSRS Nagpur</div>
            <div className="tagline">World's First Hindu Social & Ground Unity Network</div>
        </div>
        <div className="right">
          <img src="https://ik.imagekit.io/jsrsngp/bow_jyqWefWhG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664615917428" alt="" />
        </div>
    </Section>
  );
};

export default Hero;
