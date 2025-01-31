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
            bill: (parseInt(data.searchDetails.rooms) * parseInt(data.hotelDetails.price)),
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
   <div className='p-[60px] font-primary '>
      <div className='h-[60vh] w-full' style={{background:`url(${data.hotelDetails.image})`,backgroundSize:"cover"}}></div>
      

      <div className='flex justify-around mt-10'>
        <div>
        <h1 className='uppercase text-3xl font-bold '>{data.hotelDetails.hotelName}</h1>
      <h2 className='uppercase text-xl font-semibold'>{data.hotelDetails.area}, {data.hotelDetails.city}</h2>
      <h3 className='uppercase text-2xl font-bold'>$ {data.hotelDetails.price}</h3>
        </div>
        <div>
        <h1>Booking Details</h1>
        <ul>
          <li>From: <span className='text-green-500'>{data.searchDetails.fromDate}</span></li>
          <li>To: <span className='text-green-500'>{data.searchDetails.toDate}</span></li>
          <li>Rooms: <span className='text-green-500'>{data.searchDetails.rooms}</span></li>
          <li>Room Type: <span className='text-green-500'>{data.searchDetails.roomType}</span></li>
          <li>Guests: <span className='text-green-500'>{data.searchDetails.guests}</span></li>
          <li>Bill: <span className='text-green-500'>{parseInt(data.searchDetails.rooms) * parseInt(data.hotelDetails.price)}</span></li>
        </ul>
        </div>
      </div>
      <div className='flex justify-center'>
      <button onClick={handleBook} className='h-12 bg-green-500 hover:bg-green-600 rounded-lg transition-all ease-linear duration-300 p-2 text-white font-bold' >Confirm Booking</button>

      </div>
      <Toaster />
    </div>
   </>
  )
}

export default BookHotel