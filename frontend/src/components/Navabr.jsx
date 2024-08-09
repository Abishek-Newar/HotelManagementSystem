import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen fixed h-[11vh] pt-[1vh]   '>
        <div className='w-[80%] mx-auto  border-2 h-full rounded-md  flex items-center justify-between px-12 text-white backdrop-blur-sm'>
        <div>
            Hotel
        </div>
        <div>
            <ul className='flex list-none gap-4 '>
                <li>Home</li>
                <li>Hotels</li>
                <li>About</li>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar