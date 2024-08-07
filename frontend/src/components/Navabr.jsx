import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen fixed h-[11vh] pt-[1vh]  '>
        <div className='w-[80%] mx-auto  border-2 h-full rounded-md  flex items-center justify-between px-12 text-white'>
        <div>
            Hotel
        </div>
        <div>
            <ul className='flex list-none gap-4 '>
                <li>Home</li>
                <li>Hotels</li>
                <li>About</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar