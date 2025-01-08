import React from 'react'

const HotelCard = ({item}) => {
  return (
    <div>
        <ul>
            <li>{item.hotelName}</li>
            <li>{item.area}</li>
        </ul>
    </div>
  )
}

export default HotelCard