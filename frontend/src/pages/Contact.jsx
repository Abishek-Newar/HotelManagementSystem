import React from 'react'
import { Button, LabeledInput } from './Signin'
import signPage from "/public/signinPage.jpg"
import Navbar from '../components/Navabr'
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='flex min-h-screen justify-center items-center bg-cover ' style={{backgroundImage: `url(${signPage})`}}>
        <div className='w-[350px] bg-white flex flex-col gap-5 shadow-md rounded-lg drop-shadow-lg px-6 py-10'>
        <h1 className='text-2xl font-bold uppercase text-center'>Conatct Us</h1>
        <LabeledInput id="name" name="Name" type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"  />
        <LabeledInput id="email" name="Email" type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"  />
        <LabeledInput id="phone" name="Phone" type="number" onChange={(e)=>{setPhone(e.target.value)}} placeholder="Enter Phone"  />
        <label>
            <p>Query Type</p>
            <select className='h-10 w-full border'>
                <option>Select</option>
                <option value="reservation">Reservation</option>
                <option value="bookings">Bookings</option>
                <option value="others">Others</option>
            </select>
        </label>
        <Button>Submit</Button>
        </div>
    </div>
    </>
  )
}



export default Contact