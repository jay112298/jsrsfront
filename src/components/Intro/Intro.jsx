import React from "react";
import "./Intro.css";

const Intro = (props) => {
  return (
    <main>
      <section>
        <div className="hero">
          <p>{props.inp}</p>
        </div>
      </section>
    </main>
  );
};

export default Intro;
