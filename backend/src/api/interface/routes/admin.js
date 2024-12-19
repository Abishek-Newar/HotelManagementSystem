
import { adminSignin, AllBookings, AllHotels } from "../controller/admin_controller.js"


export default function adminRouter(router){
    router.post("/admin/signin",adminSignin)
    router.get("/admin/getallbookings",AllBookings)
    router.get("/admin/allhotels",AllHotels)
}