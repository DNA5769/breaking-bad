import { Router } from 'express'
import { User } from '../user/user.model.js'

const adminRouter = Router()

async function transact(req,res){
    const {addressto,amount} = req.body;

    if(!addressto || !amount){
        return res.status(400).send({err:"Send Valid Address"}).end()
    }
    const user = await User.findOne({hash_id: addressto})
    user['score'] = user['score'] + 1
    user.save()
    return res.status(200).send({data:user}).end()
}

adminRouter
    .post('/transact', transact)





export default adminRouter