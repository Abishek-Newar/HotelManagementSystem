import React from 'react'
import Bookings from './Bookings'
import AddHotel from '../../Pages/Owner/addHotel'
import EditHotel from './EditHotel'
const DashboardPage = ({page}) => {
  
    if(page==="bookings") return <Bookings />
    else if(page==="add") return <AddHotel />
    else return <EditHotel />
}

export default DashboardPage