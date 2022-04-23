import { Router } from 'express'
import { User } from '../user/user.model.js'

const adminRouter = Router()

async function transact(req,res){
    const {addressto,amount} = req.body;
    console.log(addressto,amount)

    const user = await User.findOne({hash_id: addressto})
    return res.status(200).send({data:addressto}).end()
}

adminRouter
    .post('/transact', transact)





export default adminRouter