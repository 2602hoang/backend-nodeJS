import { notAuth } from "./heandle_error"

export const isAdmin = (req,res,next)=>{
    const {role_code} = req.user
    if(role_code !== "R2"&&role_code !== "R3") return notAuth('la admin',res)
    next()
}
export const isAdmin1 = (req,res,next)=>{
    const {role_code} = req.user
    if(role_code !== "R1" && role_code !== "R3") return notAuth('la admin 1',res)
    next()
}
export const isUser = (req,res,next)=>{
    const {role_code} = req.user
    if(role_code !== "R1" && role_code !== "R2") return notAuth('la user',res)
    next()
}