import { ISendEmail } from "../interfaces/interfaces"
import * as yup from "yup"


//Schemas
    //Send email schema
        export const SendEmailSchema: yup.Schema<ISendEmail> = yup.object().shape({
            email: yup.string().email().min(5).max(260).required(),
            name: yup.string().min(3).max(120).required(),
            message: yup.string().min(3).max(460).required(),
            service: yup.string().min(3).max(50).required()
        })