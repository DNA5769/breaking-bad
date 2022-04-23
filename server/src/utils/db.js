import mongoose from 'mongoose'
import { config } from 'dotenv'
// import { config } from 'dotenv'
// const URL = config() process.env.MONGO_DB_URL
config({path:'.env'})
export const connect = () => {
    // eslint-disable-next-line no-undef
    return mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}