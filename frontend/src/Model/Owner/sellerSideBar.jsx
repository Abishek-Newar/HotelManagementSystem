import React from 'react'
import SideBar from '../../Components/SideBar'

const SellerSideBar = ({page,setPage,setShowSidebar,showSidebar}) => {
    const items = [{
      name: "Add Hotel",
      set: ()=>setPage("add")
    },{
      name: "Bookings",
      set: ()=>setPage("bookings")
    },{
      name: "Edit Hotel",
      set: ()=>setPage("edit")
    }]
  return (
    <SideBar details={items} setShowSidebar={setShowSidebar} showSidebar={showSidebar}  />
  )
}

export default SellerSideBar