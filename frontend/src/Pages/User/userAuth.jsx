import React, { useState } from 'react'
import UserSignup from '../../Model/User/userSignup'
import UserSignin from '../../Model/User/userSignIn'
import hotel from "/authbg.jpeg"
const UserAuth = () => {
  const [position,setPosition] = useState("signup")
  return (
    <div className='relative'>
        <div className=' z-0 min-h-screen grid grid-cols-2 bg-priamryBg'>
          <UserSignup position={setPosition}  />
          <UserSignin position={setPosition} />
        </div>
        <div
         className={` z-10 min-h-screen w-[45%] backdrop-blur-md  absolute transition-all ease-linear duration-300  top-0 ${position==="signup"? "translate-x-[55vw]":"translate-x-0"}`}
         style={{ backgroundImage: `url(${hotel})`, backgroundSize: 'cover', backgroundPosition: 'center', }}
         > 
         <h1 className='z-30 backdrop-blur-[2px] flex justify-center items-center text-white text-4xl w-[100%] h-screen'>There are better ways around</h1>
         </div>
    </div>
  )
}

export default UserAuth