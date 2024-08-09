import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import { Button, LabeledInput } from './Signin';
import signPage from "/public/signinPage.jpg"
const Signup = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    async function submit(){
        try {
            const response = await axios.post("http://localhost:3001/user/signup",{
                firstName,
                lastName,
                email,
                password
            })
            localStorage.setItem("token",response.data.token)
            alert("signedup")
            navigate("/")
        } catch (error) {
            console.log(error)
            alert("error while signin up")
        }
    }
  return (
    <div className='min-h-screen bg-cover flex items-center justify-end pr-[20%]' style={{backgroundImage: `url(${signPage})`}}>
        
        <div className='w-[350px] h-auto gap-5 bg-white flex flex-col px-6 py-10 rounded-lg shadow-md drop-shadow-md  '>
        <h1 className='text-2xl font-bold uppercase text-center'>Sign In</h1>
        <LabeledInput id="fname" name="First Name" type="text" onChange={(e)=>{setFirstName(e.target.value)}} placeholder="Abishek"  />
        <LabeledInput id="lname" name="Last Name" type="text" onChange={(e)=>{setLastName(e.target.value)}} placeholder="Newar"  />
        <LabeledInput id="email" name="Email" type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="abi@gmail.com"  />
        <LabeledInput id="password" name="Password" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="******"  />
        <Button onClick = {submit}>Sign up</Button>
        <p>Already hava a account? <Link to="/signin" className='lowercase underline'>SignUp</Link></p>
        </div>
    </div>
  )
}



export default Signup