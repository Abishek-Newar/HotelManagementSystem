import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className=' bg-bgColor fixed h-[8vh] z-30 w-[100%] shadow-sm'>
      <div className='flex justify-between items-center w-full px-20 h-full'>
      <div className='font-logo text-3xl'>
        Stayhub
      </div>
      {
        localStorage.getItem("token")?(
          <div className='w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center'>
            {localStorage.getItem("username").split('')[0].toUpperCase()}
          </div>
        ):(
          <div className=' w-28 h-12 font-primary bg-black text-white rounded-3xl flex items-center justify-center text-lg' onClick={()=>{navigate("/auth")}}>
        Login
      </div>
          
        )
      }
      </div>
    </nav>
  )
}

export default Navbar