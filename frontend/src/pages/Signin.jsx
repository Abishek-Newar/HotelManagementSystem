import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import signPage from "/public/signinPage.jpg"
const Signin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    async function submit(){
        try {
            const response = await axios.post("http://localhost:3001/user/signin",{
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
        
        <div className='w-[350px] h-auto bg-white flex flex-col gap-5 px-6 py-10 rounded-lg shadow-lg '>
        <h1 className='text-2xl font-bold uppercase text-center'>Sign In</h1>
        <LabeledInput id="email" name="Email" type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"  />
        <LabeledInput id="password" name="Password" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password"  />
        <Button onClick={submit}>Signin</Button>
        <p>Already hava a account? <Link to="/signup" className='lowercase underline'>Signup</Link></p>
        </div>
    </div>
  )
}

export function LabeledInput({id,onChange,type,name,placeholder}){
    return(
        <label htmlFor={id}>
            <p className='fonr-semibold text-md'>{name}:</p>
            <input type={type} id={id} name={name} onChange={onChange} placeholder={placeholder} className='w-full border h-10 rounded-lg px-2' required />
        </label>
    )
}

export function Button({children,onClick}){
    return(
        <button className='h-10 w-full bg-blue-500 rounded-lg text-white font-bold text-lg transition-all ease-linear duration-500 hover:bg-blue-600' onClick={onClick}>{children}</button>
    )
}

export default Signin