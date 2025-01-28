import axios from 'axios'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../../../lib/config'
import { toast, Toaster } from 'sonner'
import Navbar from '../../Components/Navbar'

const BookHotel = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const data = location.state
    console.log(data)

    async function handleBook(){

      const details = {
        fromDate: data.searchDetails.fromDate,
            toDate: data.searchDetails.toDate,
            guests: data.searchDetails.guests,
            rooms: data.searchDetails.rooms,
            RoomType: data.searchDetails.roomType,
            hotelId: data.hotelDetails._id
      }
      try {
        console.log("hello")
        const response = await axios.post(`${BACKEND_URL}/user/book`,details,{
          headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        toast.success("Hotel Booked")
        setTimeout(()=>{
          navigate("/booksucc")
        },1000)
      } catch (error) {
        toast.error("problem while booking hotel")
      }
    }
  return (
   <>
   <Navbar />
   <div className='p-[60px]'>
      <div className='h-[60vh] w-full' style={{background:`url(${data.hotelDetails.image})`,backgroundSize:"cover"}}></div>
      <h1 className='uppercase '>{data.hotelDetails.hotelName}</h1>
      <h2>{data.hotelDetails.area}, {data.hotelDetails.city}</h2>
      <h3>$ {data.hotelDetails.price}</h3>
      <button onClick={handleBook} >BOOK NOW</button>
      <Toaster />
    </div>
   </>
  )
}

export default BookHotel