import { badRequest, notAuth } from "./heandle_error"
import  jwt  from "jsonwebtoken";

const verifiToken =(req,res,next)=>{
    const token = req.headers.authorization
    if(!token) return badRequest("Require authorization")
    const accessToken = token.split(' ')[1]
    jwt.verify(accessToken, process.env.JWT_SECRET, (err,user)=>{
        if(err) return notAuth('not Auth')
        req.user = user
        next()
    })
}
export default verifiToken