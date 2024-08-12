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

const queriesSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    querriesRelatedTo: String,
    resolved: Boolean
})

const roomSchema = new mongoose.Schema({
    fromDate: String,
    toDate: String,
    roomType: String,
    guests: Number,
    bookedBy: String
})
const User = mongoose.model("User",userSchema)
const Queries = mongoose.model("Queries",queriesSchema)
const Room = mongoose.model("Room",roomSchema)
module.exports= {User, Queries, Room}