import jwt from "jsonwebtoken"
import owner from "../../config/schema/owner.schema.js"
import bcrypt from "bcryptjs"
import { OwnerSigninValidator, ownerSignupValidator } from "../../config/helpers/validators.js";
import env from "../../../infrastructure/env.js"
import hotel from "../../config/schema/hotel.schema.js";
import bookings from "../../config/schema/booking.schema.js";
export const ownerSignup = async( req , res) =>{
    const body = req.body;
    console.log(body)
    const salt = bcrypt.genSaltSync(10)
    try {
        const success = ownerSignupValidator.safeParse(body)
        if(!success.success){
            return res.status(403).json({msg: "Data not in format"})
        }
        const hashedPass = bcrypt.hashSync(body.password,salt);
        const check = await owner.findOne({email: body.email})
        if(check){
            return res.status(401).json({msg: "owner already exists"})
        }
        const response = await owner.create({
            name: body.name,
            phone:body.phone,
            email: body.email,
            idProof: body.idProof,
            password: hashedPass
        })
        const token = jwt.sign(response._id.toHexString(),env.SECRET_KEY)
        res.json({
            ownername: response.ownername,
            token: token
        })
    } catch (error) {
        console.log("error while signinup",error)
        return res.status(402).json({msg: "error while signinup"})
    }
}

export const ownerSignin = async(req,res) =>{
    const body = req.body
    try {
        const success = OwnerSigninValidator.safeParse(body)
        if(!success.success){
            return res.status(403).json({msg: "data not in format"})
        }
        const response = await owner.findOne({
            email: body.email,
        })
        if(!response || response == null){
            return res.status(401).json({msg: "owner not found"})
        }
        const compare = bcrypt.compareSync(body.password,response.password)
        if(!compare){
            return res.status(401).json({msg: "incorrect password"})
        }
        const token = jwt.sign(response._id.toHexString(),env.SECRET_KEY)
        res.json({
            ownername: response.ownername,
            token: token
        })
        
    } catch (error) {
        console.log("error while signing up",error)
        res.status(402).json({msg: "error while signing up"})
    }
}

export const hotelBookings = async(req,res)=>{
    try {
        const hotels =  await hotel.findOne({
            createdBy: req.userId
        })
        const bookings = await bookings.find({hotelId: hotels._id}).populate('name','hotelName')
        res.json(bookings)
    } catch (error) {
        console.log("error while fetching booking of hotel",error)
        res.json("error whil fetching booking of hotel")
    }
}







