
import { myBookings, Signin, Signup } from "../controller/user_controller.js"
import {bookHotel, searchHotel} from "../controller/hotel_controller.js"
import authMiddleware from "../../lib/authMiddleware.js"

export default function userRouter(router){
    router.post("/user/signup",Signup)
    router.post("/user/signin",Signin)
    router.post("/user/search",searchHotel)
    router.post("/user/book",bookHotel)
    router.get("/user/mybookings",authMiddleware,myBookings)
}