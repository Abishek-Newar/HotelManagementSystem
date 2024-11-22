import express from "express"
import { adminSigninValidator } from "../../config/helpers/validators.js"
import admin from "../../config/schema/admin.schema.js"
import jwt from "jsonwebtoken"
import env from "../../../infrastructure/env.js"
export const adminSignin = async(req,res) =>{
    const body = req.body 
    try {
        const success = adminSigninValidator.safeParse(body)
        if(!success.success){
            return res.status(403).json({msg: "input not in format"})
        }
        const response = await admin.findOne({
            username: body.username,
            password: body.password
        })
        if(!response || response == null){
            return res.status(403).json({
                msg: "user not found"
            })
        }
        const token = jwt.sign(response._id.toHexString(),env.SECRET_KEY)

        res.json({
            username: response.username,
            token: token
        })
    } catch (error) {
        console.log("error while admin signin",error)
        return res.status(403).json("error while signin up")
    }
}

