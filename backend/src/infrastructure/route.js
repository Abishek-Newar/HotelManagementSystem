import express from "express"
import userRouter from "../api/interface/routes/user.js"
import adminRouter from "../api/interface/routes/admin.js"

export default function createRouter(){
    const router = express.Router()

    userRouter(router)
    adminRouter(router)
    return router
}
