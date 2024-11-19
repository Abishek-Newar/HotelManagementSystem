
import { adminSignin } from "../controller/admin_controller.js"


export default function adminRouter(router){
    router.post("/admin/signin",adminSignin)
}