import React from 'react'
import Hero from '../../components/Hero/Hero'
import Hero2 from '../../components/Hero2/Hero2'
import Services from '../../components/Services/Services'
import Navbar from '../../components/Navbar/Navbar'
import NavbarT from '../../components/Navbar/NavbarT'

const Home = () => {
  return (
    <>
        <Navbar />
        <NavbarT />
        <Hero />
        <Hero2 />
        <Services />
    </>
  )
}

export default Home