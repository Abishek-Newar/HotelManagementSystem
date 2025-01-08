import React from 'react'
import axios from "axios"
import Input from '../../Components/Input'
import { BACKEND_URL } from '../../../lib/config'
import { toast, Toaster } from 'sonner'
import { useNavigate } from 'react-router-dom'
const SellerSignin = ({authType}) => {
    const navigate = useNavigate()
    const [formData,setFormData] = React.useState({
        email: "",
        password: ""
    })

    function handleChange(type,e){
        setFormData({
            ...formData,
            [type]: e.target.value
        })
    }
    async function handleSubmit(){
        try {
            const response = await axios.post(`${BACKEND_URL}/owner/signin`,formData)
            toast.success("Signin Successful")
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("username",response.data.ownername)
            setTimeout(()=>{
                navigate("/seller/dashboard")
            },2000)
        } catch (error) {
            toast.error("invalid credentials")
            console.log(error)
        }
    }
  return (
    <div className='w-[400px]  p-10 flex flex-col font-primary gap-3 '>
        <Toaster />
        <h1 className='text-center font-logo text-3xl'>SIGN IN</h1>
        <div className='flex flex-col gap-2'>
        <Input type="email" placeholder="john@gmail.com" name="Email" id="email" onChange={(e)=>handleChange("email",e)}  />
        <Input type="password" placeholder="" name="Password" id="password" onChange={(e)=>handleChange("password",e)}  />
        </div>
        <button className='w-full bg-secondaryC h-10 font-bold text-white rounded-lg ' onClick={handleSubmit}>LOGIN</button>
        <p className='text-secondaryText'>Don't have a account? <a className='underline cursor-pointer hover:text-black' onClick={()=>{authType("signup")}}>Signup</a></p>
    </div>
  )
}

export default SellerSignin