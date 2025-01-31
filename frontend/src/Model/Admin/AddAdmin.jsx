import React, { useState } from 'react'
import Input from '../../Components/Input'
import { BACKEND_URL } from '../../../lib/config'
import {Toaster,toast} from "sonner"
import axios from "axios"
const AddAdmin = () => {
  const [data,setData] = useState({
    username: "",
    password: ""
  })

  function handleChange(type,e){
    setData({
      ...data,
      [type]:e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const response = await axios.post(`${BACKEND_URL}/admin/add`,data,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      toast.success("ADMIN ADDED")
    } catch (error) {
      console.log(error)
      toast.error("error while adding admin")
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={(e)=>{handleSubmit(e)}} className='w-[400px] p-4 flex flex-col gap-4 font-primary'>
      <Toaster />
      <h1 className="text-3xl text-center uppercase font-bold">Add Admin</h1>
      <Input type="text" placeholder="username" id="Username" name="Username" onChange={(e)=>{handleChange("username",e)}} />
      <Input type="password" placeholder="" id="Password" name="Password" onChange={(e)=>{handleChange("password",e)}} />
      <button type='submit' className='w-full bg-secondaryC h-10 font-bold text-white rounded-lg '>Add Admin</button>
    </form>
    </div>
  )
}

export default AddAdmin