
import authMiddleware from "../../lib/authMiddleware.js"
import { adminSignin, AllBookings, AllHotels, deleteHotel, sendWarning } from "../controller/admin_controller.js"


export default function adminRouter(router){
    router.post("/admin/signin",adminSignin)
    router.get("/admin/getallbookings",authMiddleware,AllBookings)
    router.get("/admin/allhotels",authMiddleware,AllHotels)
    router.delete("/admin/deleteHotel",authMiddleware,deleteHotel)
    router.post("/admin/sendWarning",authMiddleware,sendWarning)
}