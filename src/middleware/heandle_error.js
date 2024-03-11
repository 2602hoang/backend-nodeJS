import createError from "http-errors"
export const internalServerError = (res) =>{
    const err = createError.InternalServerError()
    return res.status(err.status).json(
        {
            mes: err.message
        }
    )
}
export const notfound = (res) =>{
    const err1 = createError.NotFound()
    return res.status(err1.status).json(
        {
            mes:  err1.message
        }
    )
}
export const badRequest = (err,res) =>{
    const err2 = createError.BadRequest(err)
    return res.status(err2.status).json(
        {
            mes:  err2.message,
            
        }
    )
}
export const notAuth = (err,res) =>{
    const err2 = createError.Unauthorized(err)
    return res.status(err2.status).json(
        {
            mes:  err2.message,
            
        }
    )
}