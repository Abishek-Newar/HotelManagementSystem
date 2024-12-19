
import { adminSignin, AllBookings, AllHotels, deleteHotel, sendWarning } from "../controller/admin_controller.js"


export default function adminRouter(router){
    router.post("/admin/signin",adminSignin)
    router.get("/admin/getallbookings",AllBookings)
    router.get("/admin/allhotels",AllHotels)
    router.delete("/admin/deleteHotel",deleteHotel)
    router.post("/admin/sendWarning",sendWarning)
}