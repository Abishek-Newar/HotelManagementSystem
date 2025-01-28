import React from 'react'
import { useLocation } from 'react-router-dom'

const BookHotel = () => {
    const location = useLocation()
    const data = location.state
    console.log(data)
  return (
    <div>BookHotel</div>
  )
}

export default BookHotel