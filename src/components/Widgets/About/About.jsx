import React from 'react'
import { Link } from 'react-router-dom'
import { AboutWidget } from './About.st'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <AboutWidget>
      <div className="about-heading"><hr/>About</div>
      <div className="about-body">City unit of Jai ShriRam Sena. Our vision is to engage more people in the fight for better Life and Society as a ramrajya.<Link to="/about"><BsFillArrowRightCircleFill className='arrow-icon'/></Link></div>
      <div className="about-learn-more">Learn More<hr/></div>
    </AboutWidget>
  )
}

export default About