
import { Signin, Signup } from "../controller/user_controller.js"

export default function userRouter(router){
    router.post("/user/signup",Signup)
    router.post("/user/signin",Signin)
}