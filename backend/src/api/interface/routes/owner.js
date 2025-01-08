import authMiddleware from "../../lib/authMiddleware.js"
import { addHotel, updateHotel } from "../controller/hotel_controller.js"
import { myHotels, ownerSignin, ownerSignup } from "../controller/owner_controller.js"
import { upload } from "../model/hotel.model.js"



export default function ownerRouter(router){
    const multiple = [authMiddleware,upload.single('file')]
    router.post("/owner/signup",ownerSignup)
    router.post("/owner/signin",ownerSignin)
    router.post("/owner/addhotel",multiple,addHotel)
    router.put("/owner/updatehotel",authMiddleware,updateHotel)
    router.get("/owner/myhotels",authMiddleware,myHotels)
}