import jwt from "jsonwebtoken"
import env from "../../infrastructure/env.js"
function authMiddleware(req,res,next){
    const authorization = req.headers.authorization;
    console.log(authorization)
    const token = authorization.split(" ")[1];
    try {
        const verification = jwt.verify(token,env.SECRET_KEY)
        if(!verification){
            return res.status(403).json({msg:"token is required"})
        }
        req.userId = verification
        next()
    } catch (error) {
        console.log("error in auth middleware",error);
        res.status(403).json({msg: "error in token"})
    }
}

export default authMiddleware