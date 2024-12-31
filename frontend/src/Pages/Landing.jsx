import React from 'react'
import Footer from '../Model/Footer'
import Navbar from '../Components/Navbar'
import Hero from '../Model/Hero'
import Description from '../Model/Description'
import Deals from '../Model/Deals'
import Reviews from '../Model/Reviews'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Deals />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Landing