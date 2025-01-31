import React from 'react'


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


export const AdminBookingCard = ({item}) =>{

  return (
    <div className='w-[70%] border-b flex justify-around p-2 items-center font-primary'>
      <div className='w-32 h-32' style={{background: `url(${item.hotelId[0].image})`,backgroundSize:"cover"}}>
      </div>
      <div>
        <ul>
          <li className='font-bold uppercase'>Hotel Details</li>
          <li>Hotel Name: {item.hotelId[0].hotelName}</li>
          <li>Address: {item.hotelId[0].address}</li>
          <li>Price: {item.hotelId[0].price}</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='font-bold uppercase'>User Details: </li>
          <li>Name: {item.bookedBy[0].name}</li>
          <li>Email: {item.bookedBy[0].email}</li>
        </ul>
      </div>
      <div>
        <ul>
        <li className='font-bold uppercase'>Booking Details:</li>
        <li>From: {item.fromDate.slice(0,10)}</li>
        <li>To: {item.toDate.slice(0,10)}</li>
        <li>Rooms: {item.rooms}</li>
        </ul>
      </div>
    </div>
  )
}