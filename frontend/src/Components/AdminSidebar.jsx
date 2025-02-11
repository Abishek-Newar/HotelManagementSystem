import React from 'react'
import {useNavigate} from "react-router-dom"
const AdminSidebar = ({setPage}) => {
  const navigate = useNavigate()
    const items = [{
        name: "All Hotels",
        set: ()=>setPage("allhotel")
      },{
        name: "All Bookings",
        set: ()=>setPage("allbooking")
      },{
        name: "Add Admin",
        set: ()=>setPage("add")
      }]

      function handleLogout(){
        localStorage.clear()
        navigate("/")
      }
  return (
      <div className='xl:w-[20vw] bg-[#FFAE27] min-h-screen  border flex flex-col items-center relative '>
        <div className='text-3xl font-logo text-center pt-8 pb-14 relative w-full '>
            Stayhub
            
        </div>
        {
            items.map((item,index)=>(
                <div className='text-lg border cursor-pointer h-16 w-full flex items-center justify-center font-bold text-white hover:bg-[#FF840C] transition-all ease-linear duration-300' key={index} onClick={item.set}>
                    {item.name}
                </div>
            ))
        }
        <div className='absolute bottom-2 mx-auto border hover:bg-[#FF840C] w-36 text-xl text-white p-2  text-center transition-all ease-linear duration-300 rounded-lg font-bold cursor-pointer' onClick={handleLogout}>
          Logout
        </div>
    </div>
  )
}

export default AdminSidebar