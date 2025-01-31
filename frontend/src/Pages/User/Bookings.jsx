import React, { useEffect } from 'react'
import axios from "axios"
import { BACKEND_URL } from '../../../lib/config'
import Navbar from '../../Components/Navbar'
import HotelCard from '../../Components/HotelCard'
import { useNavigate } from 'react-router-dom'
const Bookings = () => {
    const [data,setData] = React.useState([])
    const [loading,setLoading] = React.useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("token") || localStorage.getItem("type")!=="user"){
            navigate("/")
        }
    },[])
    useEffect(()=>{
        async function serverCall(){
            const response = await axios.get(`${BACKEND_URL}/user/mybookings`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(response.data)
            setData(response.data.bookings.reverse())
            setLoading(false)
        }
        serverCall()
    },[])
  return (
    <>
    {
        loading?
        <>Loading...</>:
        <div>
        <Navbar />
        <div className='flex flex-col items-center pt-[10vh]'>
            {
                data.map((item,key)=>(
                    <HotelCard item={item.hotelId[0]} buttonName="View Details" buttonClick={()=>{}} />
                ))
            }
        </div>
    </div>
    }
    </>
  )
}

export default Bookings