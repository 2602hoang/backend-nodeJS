import db from "../models";


export const getOne =( id )=> new Promise( async (resolve,reject)=>{
try {
    const response = await db.User.findOne({
        where: {id: id},
        attributes:{
            exclude:['password','createdAt','updatedAt']
        },
        include:
        [
            {model: db.Role, as:'roleData',attributes:['id','code','value']}
        ]
       

    })
    resolve(
        {
            err: response ? 0 : 1,
            mes: response ? "thanh cong":"khong ton tai",
            userData: response
        }
    )
   
} catch (error) {
    reject(error)
}


})