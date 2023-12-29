import express from 'express'
export const Router: express.Router = express.Router()
import { Email, Validate } from '../controllers'
import { SendEmailSchema } from '../services/schemas'


//Routes
    //Send email
        Router.post('/email/send', Validate.ValidateYUP(SendEmailSchema), Email.Send)