import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link, useNavigate } from 'react-router-dom';
const BookingSuccessful = () => {
    const [count,setCount] = useState(5)
    const navigate = useNavigate()
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevCount) => {
                if (prevCount > 1) {
                  return prevCount - 1;
                } else {
                  clearInterval(interval); 
                  navigate("/"); 
                  return 0; 
                }})
        },1000)

        return () => clearInterval(interval); 
    },[navigate])
  return (
    <>
    <Navbar />
    <div className='pt-[300px]'>
    <div className='h-[250px] '>
    <DotLottieReact
      src="https://lottie.host/6d0cab4b-7a5c-43a7-bbfd-23022b05da18/sTJX6wK9nJ.lottie"
      autoplay
      
    />
    </div>
    <h1 className='text-center text-4xl'>Booking Confirmed</h1>
    <p className='text-center '>Redirecting in {count}, <Link className='underline cursor-pointer' to="/">Home</Link></p>
    </div>
    </>
  )
}

export default BookingSuccessful


