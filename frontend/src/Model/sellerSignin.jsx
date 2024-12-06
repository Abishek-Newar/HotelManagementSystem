import React from 'react'
import Input from '../Components/Input'
import { BACKEND_URL } from '../../config'

const SellerSignin = ({authType}) => {
    const [formData,setFormData] = React.useState({
        email: "",
        password: ""
    })

    function handleChange({type,e}){
        setFormData({
            ...formData,
            [type]: e.target.value
        })
    }
    async function handleSubmit(){
        try {
            const response = await axios.post(`${BACKEND_URL}/v1/owner/signin`,formData)
            toast.success("Signin Successful")
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("username",response.data.username)
            setTimeout(()=>{
                navigate("/seller/dashboard")
            },2000)
        } catch (error) {
            toast.error("invalid credentials")
            console.log(error)
        }
    }
  return (
    <div className='w-[600px] h-[600px] p-6'>
        <h1>SIGN IN</h1>
        <Input type="email" placeholder="john@gmail.com" name="Email" id="email" onChange={(e)=>handleChange("email",e)}  />
        <Input type="password" placeholder="" name="Password" id="password" onChange={(e)=>handleChange("password",e)}  />
        <button className='' onChange={handleSubmit}>LOGIN</button>
    </div>
  )
}

export default SellerSignin