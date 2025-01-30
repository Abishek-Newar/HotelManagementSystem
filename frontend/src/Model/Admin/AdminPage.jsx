import React from 'react'
import AllBookings from './AllBookings'
import AllHotel from './AllHotel'
import AddAdmin from './AddAdmin'

const AdminPage = ({page}) => {
  if(page=== "allbooking") return <AllBookings />
  else if(page==="allhotel") return <AllHotel />
  else if(page==="add") return <AddAdmin />
}

export default AdminPage