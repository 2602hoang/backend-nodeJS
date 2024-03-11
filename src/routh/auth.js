import * as controllers from '../controllres'
import  express  from 'express';

export const auth = express.Router()
auth.post('/register',controllers.register)
auth.post('/login',controllers.login)

