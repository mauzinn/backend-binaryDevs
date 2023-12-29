import { RequestHandler } from "express"
import * as yup from 'yup'


//Middleware
    //Validate yup
        export const ValidateYUP = (Schema: yup.Schema<any>): RequestHandler => async(req, res, next) => {
            try {
                await Schema.validate(req.body)
                return next()
            } catch (error: any) {
                return res.status(400).json({
                    result: false,
                    error: error.message
                })
            }
        }