import React, { useState } from 'react'
import UserSignup from '../Model/userSignup'
import UserSignin from '../Model/userSignIn'

const UserAuth = () => {
  const [position,setPosition] = useState("signup")
  return (
    <div className=''>
        <div className=' min-h-screen grid grid-cols-2'>
          <UserSignup position={setPosition}  />
          <UserSignin position={setPosition} />
        </div>
        <div className={`min-h-screen w-[45%] bg-black absolute transition-all ease-linear duration-300  top-0 ${position==="signup"? "translate-x-[55vw]":"translate-x-0"}`}></div>
    </div>
  )
}

export default UserAuth