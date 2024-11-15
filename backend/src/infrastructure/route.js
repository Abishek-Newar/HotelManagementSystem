import express from "express"
import userRouter from "../api/interface/routes/user.js"

export default function createRouter(){
    const router = express.Router()

    userRouter(router)
    return router
}
