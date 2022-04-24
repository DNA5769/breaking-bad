import { Router } from 'express'
import transact from '../controllers/admin.js'

const adminRouter = Router()

adminRouter.post('/transact', transact)

export default adminRouter