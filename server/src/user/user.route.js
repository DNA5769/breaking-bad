import { Router} from 'express'

import { login } from './user.controller.js'
const userRouter = Router()

userRouter
    .post('/login', login)

export default userRouter