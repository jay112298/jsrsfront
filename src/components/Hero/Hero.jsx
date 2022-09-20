import React from 'react'
import "./Hero.css"

const Hero = (props) => {
  return (
    <main>
        <section className="section-hero">
            <div className="hero">
                <p>{props.inp}</p>
            </div>
        </section>
    </main>
  )
}

export default Hero