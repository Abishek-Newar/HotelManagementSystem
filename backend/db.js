const mongoose = require ("mongoose") 
mongoose.connect("mongodb+srv://chandansharma55100:Chandan5100@cluster0.luamo2r.mongodb.net/todos")
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