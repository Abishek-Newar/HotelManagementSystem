import React, { useState } from 'react'
import { BACKEND_URL } from '../../../lib/config'
import axios from "axios"
const AllBookings = () => {
    const [data,setData] = useState([])
    React.useEffect(()=>{
        async function serverCall(){
            const response = await axios.get(`${BACKEND_URL}/admin/getallbookings`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(response.data)
        }
        serverCall()
    },[])
  return (
    <div>
        {
            
        }
    </div>
  )
}

export default AllBookings