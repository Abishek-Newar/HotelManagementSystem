import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-black text-white p-10'>
      <h1 className='text-center text-white'>Find your perfect escape on</h1>
      <h1 className='text-center text-white text-[220px] leading-none mb-20'>Stayhub</h1>
      <div className='w-full flex justify-around'>
        <div>
          <h1>Location</h1>
          <ul>
            <li>Delhi</li>
            <li>Ahmedabad</li>
            <li>Mumbai</li>
            <li>Chandigarh</li>
          </ul>
        </div>
        <div>
        <h1>Sign Options</h1>
          <ul>
            <li className='cursor-pointer' onClick={()=>{navigate("/admin/auth")}}>Admin</li>
            <li className='cursor-pointer' onClick={()=>{navigate("/seller/auth")}}>Seller</li>
          </ul>
        </div>
        <div><h1>Location</h1>
          <ul>
            <li>Delhi</li>
            <li>Ahmedabad</li>
            <li>Mumbai</li>
            <li>Chandigarh</li>
          </ul></div>
      </div>
    </div>
  )
}

export default Footer