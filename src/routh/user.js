import * as controllers from '../controllres'
import  express  from 'express';
import verifiToken from '../middleware/verify_token';

export const user = express.Router()

 user.use(verifiToken)

 user.get('/',controllers.getUser)

