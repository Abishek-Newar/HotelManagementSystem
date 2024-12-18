
import { Signin, Signup } from "../controller/user_controller.js"
import {searchHotel} from "../controller/hotel_controller.js"

export default function userRouter(router){
    router.post("/user/signup",Signup)
    router.post("/user/signin",Signin)
    router.post("/user/search",searchHotel)
}