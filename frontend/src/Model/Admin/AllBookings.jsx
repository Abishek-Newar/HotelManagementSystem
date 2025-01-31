import React, { useState } from 'react'
import { BACKEND_URL } from '../../../lib/config'
import axios from "axios"
import { AdminBookingCard } from '../../Components/HotelCard'
const AllBookings = () => {
    const [data,setData] = useState([])
    React.useEffect(()=>{
        async function serverCall(){
            const response = await axios.get(`${BACKEND_URL}/admin/getallbookings`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })
            setData(response.data)
            console.log(response.data)
        }
        serverCall()
    },[])
  return (
    <div className='flex flex-col items-center'>
        {
            data.map((item,index)=>(
                <AdminBookingCard key={index} item={item} />
            ))
        }
    </div>
  )
}

export default AllBookings