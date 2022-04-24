import { User } from '../models/user.js'

async function transact(req,res) {
    const {addressto} = req.body;

    if(!addressto){
        return res.status(400).send({err:"Send Valid Address"}).end()
    }
    const user = await User.findOne({hash_id: addressto})
    user['score'] = user['score'] + 1
    user.save()
    return res.status(200).send({data:user}).end()
}

export default transact;