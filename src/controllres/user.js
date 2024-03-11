
import { badRequest, internalServerError } from "../middleware/heandle_error";
import *as services from "../seeders";

export const getUser = async (req,res)=>{
    try {
        const {id} = req.user

        console.log(id);
        const response = await services.getOne(id)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res)
    }
}
