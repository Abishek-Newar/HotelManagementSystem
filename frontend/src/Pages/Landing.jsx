import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Hero from '../Model/Hero'
import Description from '../Model/Description'
import Deals from '../Model/Deals'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Deals />
      <Footer />
    </div>
  )
}

export default Landing