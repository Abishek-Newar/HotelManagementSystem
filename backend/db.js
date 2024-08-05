const mongoose = require ("mongoose") 
require("dotenv").config()
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongoose connected")
})
const userSchema = new mongoose.Schema({
   firstname:String,
   lastname:String,
    email:String,
    password:String
})
const User = mongoose.model("User",userSchema)
module.exports= User