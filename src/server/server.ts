import express from 'express'
export const server: express.Express = express()


//Configuration
    //Express parser
        server.use(express.json())

    //Cors
        import cors from 'cors'
        server.use(cors({origin: "https://frontend-binary-devs.vercel.app"}))


//Routes
    import { Router } from './routes/routes'
    server.use(Router)