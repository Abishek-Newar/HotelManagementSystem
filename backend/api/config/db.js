import mongoose from "mongoose"
import env from "../../infrastructure/env.js"


async function dbConnection(){
    await mongoose
       .connect(env.MONGO_URL)
       .then(()=>{
        console.log("mongo dabase connected")
       })
       .catch((err)=>{
        console.log("Error while connecting mogoose",err)
       })
}

export default dbConnection