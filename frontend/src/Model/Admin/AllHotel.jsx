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

  async function handleDelete(id){
    const response = await axios.delete(`${BACKEND_URL}/admin/deleteHotel`,{
      data: {id:id},
      headers:{
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }) 
  }

  return (
    <div className='flex flex-col items-center'>
      {
        data.map((item,index)=>(
          <HotelCard key={index} item={item} buttonName="Delete" buttonClick={()=>{handleDelete(item._id)}} />
        ))
      }
    </div>
  )
}

export default AllHotel