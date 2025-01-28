import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { BACKEND_URL } from "../../../lib/config.js"
import { toast, Toaster } from 'sonner'
import HotelCard from '../../Components/HotelCard.jsx'
import Navbar from '../../Components/Navbar.jsx'
import { useNavigate } from 'react-router-dom'
const SearchPage = () => {
  const items = useSelector(state => state)
  const [loading, setLoading] = React.useState(true)
  const [hotels, setHotels] = React.useState([])
  const navigate = useNavigate()

  React.useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.post(`${BACKEND_URL}/user/search`, items.updateItem)
        setHotels(response.data)
        console.log("response from data of search ", response.data)
        setLoading(false)
      } catch (error) {
        toast.error("error while searching hotel")
      }

    }
    fetchHotels()
  }, [])
  

  function BookNow(item){
    let data = {
      searchDetails: items.updateItem,
      hotelDetails: item
    }
    if(localStorage.getItem("token") && localStorage.getItem("type")==="user"){
      navigate("/booknow",{state: data})
    }else{
      navigate("/auth")
    }
  }
  console.log(items)
  return (
    <>
      <Toaster />
      {
        loading ?
          (
            <div>
              LOADING...
            </div>
          ) : (
            <>
            <Navbar />
            <div className='flex flex-col pt-[10vh] font-primary'>
              <h1 className='text-center text-2xl'><span className='text-green-500'>{hotels.length}</span> found in <span className='text-green-400'>{items.updateItem.location}</span></h1>
              {
                hotels.map((item,index)=>(
                  <div key={index} className='w-full flex justify-center'>
                    <HotelCard item={item} buttonName="Book Now" buttonClick={()=>{BookNow(item)}} />
                  </div>
                ))
              }
            </div>
            </>

          )
      }
    </>
  )
}

export default SearchPage