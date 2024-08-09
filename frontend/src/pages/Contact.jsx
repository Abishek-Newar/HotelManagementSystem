import React, { useState } from 'react'
import { Button, LabeledInput } from './Signin'
import signPage from "/public/signinPage.jpg"
import Navbar from '../components/Navabr'
import axios from 'axios'
import { TiTickOutline } from "react-icons/ti";
const Contact = () => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState(0);
    const [queriesRelatedTo, setQueriesRelatedTo] = useState();
    const [showComment,setShowComment] = useState(false);
    async function submit(){
        try {
            const response = await axios.post("http://localhost:3000/hotel/contact",{
                name,
                email,
                phone,
                queriesRelatedTo
            })
            setShowComment(true)

        } catch (error) {
            alert("error adding queries")
        }
    }
  return (
    <>
    <Navbar/>
    <div className='flex min-h-screen justify-center items-center bg-cover ' style={{backgroundImage: `url(${signPage})`}}>
        <div className='w-[350px] bg-white flex flex-col gap-5 shadow-md rounded-lg drop-shadow-lg px-6 py-10'>
        <h1 className='text-2xl font-bold uppercase text-center'>Conatct Us</h1>
        <LabeledInput id="name" name="Name" type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"  />
        <LabeledInput id="email" name="Email" type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"  />
        <LabeledInput id="phone" name="Phone" type="number" onChange={(e)=>{setPhone(parseInt(e.target.value))}} placeholder="Enter Phone"  />
        <label>
            <p>Query Type</p>
            <select className='h-10 w-full border' onChange={(e)=>setQueriesRelatedTo(e.target.value)}>
                <option>Select</option>
                <option value="reservation">Reservation</option>
                <option value="bookings">Bookings</option>
                <option value="others">Others</option>
            </select>
        </label>
        <Button onClick={submit}>Submit</Button>
        <div className={`${showComment? "block": "hidden"} flex gap-2 text-green-500 items-center justify-center`}>
            <TiTickOutline className="text-2xl" />
            <p>Query Added Sucessfully</p>
        </div>
        </div>
    </div>
    </>
  )
}



export default Contact