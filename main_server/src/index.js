import express from 'express'
import fileUpload from 'express-fileupload';
import pkg from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { connect } from './utils/db.js'
import { config } from 'dotenv'

import tipoffRouter from '../routers/tipoff.js';
import loginRouter from '../routers/login.js'
import adminRouter from '../routers/admin.js'

const app = express()
const { json, urlencoded } = pkg
const PORT = process.env.PORT || 3030
// app.use('/user',userRouter)

app.use(urlencoded({ extended: true }))
app.use(fileUpload());
app.use(json())
app.use(morgan('dev'))
app.use(cors())
app.options('*', cors())

app.use('/tipoff', tipoffRouter)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/user', loginRouter)
app.use('/admin', adminRouter)

app.listen(PORT, async () => {
    config({path:'.env'})
    console.log('server is running on port 3030 http://localhost:3030')
    console.log(process.env.DB_URL)
    await connect()
        .then(() => console.log('DB Connected'))
        .catch((err) => console.log(`DB Disconnected ${err.message}`))
})
