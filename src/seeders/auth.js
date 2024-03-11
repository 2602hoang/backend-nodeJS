import db from "../models";
import  bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken";


const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8))

export const register =( {email,password} )=> new Promise( async (resolve,reject)=>{
try {
    const response = await db.User.findOrCreate({
        where: {email},
        defaults:{
            email,
            password: hashPassword(password),
            // role_code,
            
           
        }

    })
    //  console.log(role_code);
     const token =response[1] ? jwt.sign({id: response[0].id,email : response[0].email,role_code: response[0].role_code},process.env.JWT_SECRET,{expiresIn:"5d"}):null
    resolve(
        {
            err: response[1] ? 0 : 1,
            mes: response[1] ? "ok":"email trung",
            token :`${token}`
        }
    )
    resolve({
        err:0,
        mes:'thanh cong'
    })
   
} catch (error) {
    reject(error)
}


})
export const login =( {email,password} )=> new Promise( async (resolve,reject)=>{
    try {
        
        const response = await db.User.findOne({
            where: {email},
            raw:true
    
        })
        const ischecked = response && bcrypt.compareSync(password,response.password)
        const token = ischecked ?  jwt.sign({id: response.id,email : response.email,role_code: response.role_code},process.env.JWT_SECRET,{expiresIn:"5d"}):null
         console.log(response);
    
        resolve(
            {
                err: token ? 0 : 1,
                mes: token ? "ok":response? 'password sai ': "email chua co",
                token :token ? `${token}`:token
            }
        )
        resolve({
            err:0,
            mes:'thanh cong'
        })
       
    } catch (error) {
        reject(error)
    }
})