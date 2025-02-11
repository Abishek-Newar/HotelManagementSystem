import React from 'react'
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const NavbarShow = ({showSidebar,setShowSidebar}) => {
  return (
    <div className='w-12 h-12 border rounded-full p-1 cursor-pointer flex justify-center items-center z-10' onClick={()=>{setShowSidebar(!showSidebar)}}>
    {
        showSidebar?
        (<IoClose className=' text-white' onClick={()=>{setShowSidebar(!showSidebar);console.log(showSidebar)}} />):
        (<MdMenu className='text-3xl '  />)
    }
    </div>
  )
}

export default NavbarShow