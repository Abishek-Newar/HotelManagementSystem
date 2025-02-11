import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../../../lib/config'
import HotelCard, { AdminBookingCard } from '../../Components/HotelCard'

const Bookings = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    async function serverCall(){
      try {
        const response = await axios.get(`${BACKEND_URL}/owner/hotelBooking`,{
          headers:{
            authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        console.log(response.data)
        setData(response.data)
      } catch (error) {
        
      }
    }
    serverCall()
  })
  return (
    <div>
      {
        data.map((item,index)=>(
          <AdminBookingCard key={index} item={item} />
        ))
      }
    </div>
  )
}

export default Bookings