import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import Navbar from '../components/Navabr'
import CheckAvailabity from '../components/checkAvailabity'

const Home = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/signin")
        }
    },[])
  return (
    <>
    <Navbar />
    <Hero />
    <CheckAvailabity />
    </>
  )
}

export default Home