import React from 'react'
import SellerSideBar from '../../Model/Owner/sellerSideBar'
import DashboardPage from '../../Model/Owner/DashboardPage'
import NavbarShow from '../../Components/NavbarShow'

const SellerDashboard = () => {
  const [page,setPage] = React.useState("bookings")
  const [showSidebar,setShowSidebar] = React.useState(true)
  return (
    <div className='flex'>
      <div className={`${showSidebar? "translate-x-0":"translate-x-[-25vw]"} transition-all ease-linear duration-300`}> 
        <SellerSideBar page={page} setPage={setPage} setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      </div>
      <div className='absolute top-5 left-5'><NavbarShow setShowSidebar={setShowSidebar} showSidebar={showSidebar} /></div>
      <div className={`${showSidebar? "w-[75vw]":"w-[95vw] translate-x-[-12vw] "}`}>
        <DashboardPage page={page} />
      </div>
    </div>
  )
}

export default SellerDashboard