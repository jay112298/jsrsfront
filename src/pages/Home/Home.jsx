import React from 'react'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Services />
    </>
  )
}

export default Home