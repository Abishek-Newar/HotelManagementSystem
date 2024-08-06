import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
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
    <div>
        <LabeledInput id="email" name="Email" type="email" onChange={(e)=>{setEmail(e.target.value)}}  />
        <LabeledInput id="password" name="Password" type="password" onChange={(e)=>{setPassword(e.target.value)}}  />
        <button onClick={submit}>Signin</button>
        <p>Already hava a account? <Link to="/signup">Signup</Link></p>
    </div>
  )
}

export function LabeledInput({id,onChange,type,name}){
    return(
        <label htmlFor={id}>
            <p>{name}</p>
            <input type={type} id={id} name={name} onChange={onChange} />
        </label>
    )
}

export default Signin