import React from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'


const HotelCard = ({item,buttonName,buttonClick}) => {
  
  
  return (
    <div className='w-[70%] border-b flex justify-around p-2 items-center'>
      <div className={`w-36 h-36`} style={{background:`url(${item.image})`,backgroundSize:"cover"}}></div>
        <ul>
            <li className='text-2xl font-bold'>{item.hotelName}</li>
            <li className='text-lg font-semibold'>{item.area},{item.city}</li>
            <li className='text-xl '>$ {item.price}</li>
        </ul>
        <button className='bg-secondaryC h-12 text-white p-2 rounded-lg font-bold uppercase' onClick={buttonClick}>{buttonName}</button>
    </div>
  )
}

export default HotelCard