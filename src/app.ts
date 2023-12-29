require('dotenv').config()
import express from 'express'
const app: express.Express = express()


//Server config
    import { server } from './server/server'
    app.use(server)











//Server
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server as listen in port: " + process.env.PORT || 3000)
    })