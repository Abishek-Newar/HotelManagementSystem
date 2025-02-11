import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../../../lib/config'
import axios from "axios"
import HotelCard from '../../Components/HotelCard'
import { toast, Toaster } from 'sonner'
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

  async function handleWarning(id){
    try {
      const response = await axios.post(`${BACKEND_URL}/admin/sendwarning`,{createdBy: id},{
        headers:{
          authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      toast.success("warning send")
    } catch (error) {
      console.log(error)
      toast.error("error while sending warning")
    }
  }

  return (
    <>
    <div className='flex flex-col items-center'>
      {
        data.map((item,index)=>(
          <HotelCard key={index} item={item} buttonName="Delete" buttonClick={()=>{handleDelete(item._id)}} >
            <button onClick={()=>{handleWarning(item.createdBy)}} className='bg-red-500 h-12 text-white p-2 rounded-lg font-bold uppercase'>Warning</button>
          </HotelCard>
        ))
      }
      
    </div>
    <Toaster />
    </>
  )
}

export default AllHotel