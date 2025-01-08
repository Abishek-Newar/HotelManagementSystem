import React from 'react'
import SellerSideBar from '../../Model/Owner/sellerSideBar'
import DashboardPage from '../../Model/Owner/DashboardPage'

const SellerDashboard = () => {
  const [page,setPage] = React.useState("bookings")
  const [showSidebar,setShowSidebar] = React.useState(true)
  return (
    <div className='flex'>
      <div>
      {
        showSidebar? 
        (<SellerSideBar page={page} setPage={setPage} setShowSidebar={setShowSidebar} showSidebar={showSidebar} />)
        :
        null
      }
      </div>
      <div className='w-full'>
        <DashboardPage page={page} />
      </div>
    </div>
  )
}

export default SellerDashboard