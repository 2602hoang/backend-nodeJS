// const auth  = require('./auth')
// const user = require('./user')
import { notfound } from "../middleware/heandle_error"
import  {auth}  from "./auth"
import {user} from "./user"

export const router = (app)=>{

   
    app.use('/api/v1/auth',auth)
    app.use('/api/v1/user',user)

    return app.use("/",notfound)
 
}

