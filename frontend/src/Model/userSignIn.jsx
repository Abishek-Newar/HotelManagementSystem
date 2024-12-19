import React from 'react'
import Input from '../Components/Input'
import axios from "axios"
import { BACKEND_URL } from '../../config'
import {Toaster, toast} from "sonner"
import {useNavigate, Link} from "react-router-dom"
const UserSignin = ({position}) => {
    const navigate = useNavigate()
    const [formData,setFormData] = React.useState({
      email: "",
      password: ""
    })

    function handleChange(type,e){
      setFormData(
        {
          ...formData,
          [type]: e.target.value
        }
      )
    }

    async function handleSubmit(){
      try {
        const response = await axios.post(`${BACKEND_URL}/user/signin`,formData)
        localStorage.setItem("token",response.data.token)
        toast.success("Signin Successful")
        localStorage.setItem("username",response.data.username)
        setTimeout(()=>{
          navigate("/")
        },2000)
      } catch (error) {
        toast.error("invalid credentials")
        console.log("error while signing up",error)
      }
    }
  return (
    <div className='flex items-center justify-center  min-h-screen'>
        
      <div className='border-2 border-borders w-[400px] rounded-md  p-6'>
        <div className='flex flex-col gap-2'>
        <h1 className='text-center text-3xl font-extrabold'>SIGN IN</h1>
        <p className='text-gray-400 text-center'>Enter your credentials to signup</p>
        </div>
      <div className='flex flex-col gap-4'>
      <Input type="email" placeholder="John@gmail.com" name="Email" id="email" onChange={(e)=>handleChange("email",e)} />
      <Input type="password" placeholder="****" name="Password" id="password" onChange={(e)=>handleChange("password",e)} />
      <button className='w-[100%] bg-secondary hover:bg-priamry transition-all ease-linear duration-300 h-10 rounded-md' onClick={handleSubmit}>Signup</button>
      <p className='text-gray-400'>Already have a account? <a className='underline cursor-pointer' onClick={()=>position("signup")}>Sign in</a></p>
      </div>
      </div>

      <Toaster />
    </div>
  )
}

export default UserSignin