import React from 'react'
import Input from '../Components/Input'
import axios from "axios"
import { BACKEND_URL } from '../../config'
import {Toaster, toast} from "sonner"
import {useNavigate} from "react-router-dom"
const UserSignup = () => {
    const navigate = useNavigate()
    const [formData,setFormData] = React.useState({
      name: "",
      username: "",
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
        const response = await axios.post(`${BACKEND_URL}/user/signup`,formData)
        localStorage.setItem("token",response.data.token)
        toast.success("Signup Successful")
        setTimeout(()=>{
          navigate("/")
        },2000)
      } catch (error) {
        toast.error("invalid credentials")
        console.log("error while signing up",error)
      }
    }
  return (
    <div>
        
      <Input type="text" placeholder="John Doe" name="Name" id="name" onChange={(e)=>handleChange("name",e)} />
      <Input type="text" placeholder="John" name="Username" id="username" onChange={(e)=>handleChange("username",e)} />
      <Input type="email" placeholder="John@gmail.com" name="Email" id="email" onChange={(e)=>handleChange("email",e)} />
      <Input type="password" placeholder="****" name="Password" id="password" onChange={(e)=>handleChange("password",e)} />
      <button onClick={handleSubmit}>Signup</button>

      <Toaster />
    </div>
  )
}

export default UserSignup