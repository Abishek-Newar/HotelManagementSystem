import React, { useState } from 'react'
import AdminSidebar from '../../Components/AdminSidebar'
import NavbarShow from '../../Components/NavbarShow'
import AdminPage from '../../Model/Admin/AdminPage'
const AdminDashboard = () => {
  const [showSidebar,setShowSidebar] = useState(true)
  const [page,setPage] = useState("allhotel")
  return (
    <div>
      <div className='flex'>
      <div className={`${showSidebar? "translate-x-0":"translate-x-[-25vw]"} transition-all ease-linear duration-300`}> 
        <AdminSidebar  setPage={setPage} />
      </div>
      <div className='absolute top-5 left-5'><NavbarShow setShowSidebar={setShowSidebar} showSidebar={showSidebar} /></div>
      <div className={`${showSidebar? "w-[75vw]":"w-[95vw] translate-x-[-12vw] "}`}>
        <AdminPage page={page} />
      </div>
    </div>
    </div>
  )
}

export default AdminDashboard