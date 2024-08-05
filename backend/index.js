const express = require("express")
const userRouter = require("./routes/user")
const cors = require ("cors")
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())

app.use("/user",userRouter)

app.listen(3001,()=>{
    console.log("port conencted")
})