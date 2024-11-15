import { signupValidator } from "../../config/helpers/validators.js";
import user from "../../config/schema/user.schema.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "../../../infrastructure/env.js"
export const Signup = async( req , res) =>{
    const body = req.body;
    console.log(body)
    const salt = bcrypt.genSaltSync(10)
    try {
        const success = signupValidator.safeParse(body)
        if(!success.success){
            return res.status(403).json({msg: "Data not in format"})
        }
        const hashedPass = bcrypt.hashSync(body.password,salt);
        const check = await user.findOne({email: body.email})
        if(check){
            return res.status(401).json({msg: "user already exists"})
        }
        const response = await user.create({
            name: body.name,
            username: body.username,
            email: body.email,
            password: hashedPass
        })
        const token = jwt.sign(response._id.toHexString(),env.SECRET_KEY)
        res.json({
            username: response.username,
            token: token
        })
    } catch (error) {
        console.log("error while signinup",error)
        return res.status(402).json({msg: "error while signinup"})
    }
}