import React from "react";
import { Link } from "react-router-dom";
import { Section } from "./Hero.st.js";

const Hero = (props) => {
  return (
    <main>
      <Section>
        <div className="hero">
          <p>Your small contribution can help us establish Ram Rajya</p>
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        </div>
      </Section>
    </main>
  );
};

export default Hero;
