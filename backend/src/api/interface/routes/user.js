
import { Signup } from "../controller/user_controller.js"

export default function userRouter(router){
    router.post("/user/signup",Signup)
}