const express = require("express")
const userRouter = require("./routes/user")
const cors = require("cors")
const hotelRouter = require("./routes/hotel")
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())

app.use("/user",userRouter)
app.use("/hotel",hotelRouter) 

app.listen(3000,()=>{
    console.log("port conencted")
})
