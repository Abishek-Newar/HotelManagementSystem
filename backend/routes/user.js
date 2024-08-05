const express =  require("express")
const jwt = require("jsonwebtoken")
const User = require ("../db")
require("dotenv").config()

const userRouter= express.Router()

userRouter.post("/signup",async(req,res)=>{
    const body = req.body
     try {
        const usersign= await User.findOne({email:body.email})
        if (usersign){
            return res.status(403).json({msg:"user already Exists"})
        }
        const response = await User.create({
            firstName:body.firstname,
            lastName:body.lastname,
            email:body.email,
            password:body.password

        })
        const token = jwt.sign (response._id.toHexString(),process.env.SECRET_KEY)
        res.json({token})
        
    } catch (error) {
        console.log(error)
        res.json({msg:"Error in Signup"})  
    }
})

userRouter.post("/signin",async(req,res)=>{
    const body = req.body
    try {
       const signuser= await User.findOne({email:body.email})
       if (!signuser){
           return res.status(403).json({msg:"user already Exists"})
       }
    
       const token = jwt.sign (signuser._id.toHexString(),process.env.SECRET_KEY)
       res.json({token})
       
   } catch (error) {
       console.log(error)
       res.json({msg:"Error in Signup"})  
   }
})

module.exports = userRouter