import { config } from 'dotenv'
import { User } from './user.model.js'
config({path:'.env'})

export const login = async (req, res) => {
    try{
        let hashes = process.env.hashes.split(',')
        console.log(req.body)

        const { hash_id } = req.body;

        if (JSON.stringify(req.body) == "{}" || hash_id === undefined ){
            return res.status(400).send({err:"Send a valid Hash Id"}).end()
        }

        if(hashes.includes(hash_id))
            return res.send({isAdmin:true}).end()
        else{
            const user = await User.findOne({hash_id:hash_id})
            if(!user){
                const newUser = new User({hash_id})
                await newUser.save()
                res.send({isAdmin:false,user:newUser}).end()
            }
            else return res.send({isAdmin:false}).end()
        }

    }
    catch(err){
        console.log(err)
        return res.status(500).json({error: err}).end()
    }
}