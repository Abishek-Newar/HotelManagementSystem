import { ownerSignin, ownerSignup } from "../controller/owner_controller.js"



export default function ownerRouter(router){
    router.post("/owner/signup",ownerSignup)
    router.post("/owner/signin",ownerSignin)
}