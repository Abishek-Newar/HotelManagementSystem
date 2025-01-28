import React from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'


const HotelCard = ({item}) => {
  const navigate = useNavigate()
  const items = useSelector(state => state)
  
  function BookNow(){
    let data = {
      seacrhDetails: items.updateItem,
      hotelDetails: item
    }
    navigate("/booknow",{state: data})
  }
  return (
    <div>
        <ul>
            <li>{item.hotelName}</li>
            <li>{item.area}</li>
            <li>{item.price}</li>
        </ul>
        <button onClick={BookNow}>Book Now</button>
    </div>
  )
}

export default HotelCard