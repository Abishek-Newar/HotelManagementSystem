import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../../../lib/config'
import axios from "axios"
import HotelCard from '../../Components/HotelCard'
const AllHotel = () => {
  const [data,setData]  =useState([])
  useEffect(()=>{
    async function serverCall(){
      const response = await axios.get(`${BACKEND_URL}/admin/allhotels`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
        
      })
      console.log(response.data.hotels)
      setData(response.data.hotels)
    }
    serverCall()
  },[])

  return (
    <div className='flex flex-col items-center'>
      {
        data.map((item,index)=>(
          <HotelCard key={index} item={item} buttonName="View Details" buttonClick={()=>{}} />
        ))
      }
    </div>
  )
}

export default AllHotel