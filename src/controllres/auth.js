import joi from "joi";
import { badRequest, internalServerError } from "../middleware/heandle_error";
import *as services from "../seeders";
import { email,password } from "../validate/joi";
// import createHttpError from "http-errors";
export const register =  async (req,res)=>{
    // const {email,password} =req.body
    // try {
    //     console.log(email,pa);
    //     if (!email || !password) return res.status(400).json({
    //         err: 1,
    //         msg: 'Missing inputs !'
    //     })
    //     const response = await services.register(req.body)
    //     return res.status(200).json(response)
   
    try {
        const {error} = joi.object({email,password}).validate(req.body)

        // console.log("loi ne",error);
        if (error) return badRequest(error.details[0]?.message,res)
        const response = await services.register(req.body)
        return res.status(200).json(response)
  

        
    } catch (error) {
        return internalServerError(res)
    }
}
export const login =  async (req,res)=>{
    try {
        const {email,password} = req.body
         console.log(email,password);
        if(!email||!password) return res.status(400).json({
            mes:'email or password sai '
        })
        const response = await services.login(req.body)
         return res.status(200).json(response)

        
    } catch (error) {
        return internalServerError(res)
        
    }
}