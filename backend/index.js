import express from "express"

import dbConnection from "./api/config/db.js"
import env from "./infrastructure/env.js"


const app = express()

dbConnection()
app.listen(env.PORT,()=>{
    console.log("PORT Connected")
})