import React, { useState } from 'react'
import AdminSignin from '../../Model/Admin/adminSignin'

const AdminAuth = () => {
    const [authType,setAuthType] = useState("signup")
  return (
    <div className='  flex '>
        <div className='w-[30vw] min-h-screen bg-gradient-to-b from-[#FFC639] to-[#FF840C]' style={{background: `url("https://img.freepik.com/free-vector/abstract-geometric-background-orange-yellow-tones_1095-34.jpg?t=st=1736244661~exp=1736248261~hmac=1f8ed9f4096b4ee377f12aec86a7bcc215a62220cbce92cec4b25e24e580db96&w=740")`,backgroundSize:"cover"}}></div>
        <div className='w-[60vw] min-h-screen flex justify-center items-center'>
            {
                <AdminSignin authType = {setAuthType} />
            }
        </div>
    </div>
  )
}

export default AdminAuth