import { Router} from 'express'
import { login, getUser} from '../controllers/login.js'

const loginRouter = Router()

loginRouter.post('/login', login)
loginRouter.post('/getUser', getUser)

export default loginRouter