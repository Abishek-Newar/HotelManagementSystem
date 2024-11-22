import { addHotel } from "../controller/hotel_controller.js"
import { ownerSignin, ownerSignup } from "../controller/owner_controller.js"
import { upload } from "../model/hotel.model.js"



export default function ownerRouter(router){
    router.post("/owner/signup",ownerSignup)
    router.post("/owner/signin",ownerSignin)
    router.post("/owner/addhotel",upload.single('file'),addHotel)
}