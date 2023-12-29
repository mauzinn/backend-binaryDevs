import { RequestHandler } from "express"
import { transport } from "../../services/transport"


//Middleware
    //Send email
        export const Send: RequestHandler = async(req, res) => {
            const { email, name, message, service } = req.body

            await transport.sendMail({
                from: `Binary-devs <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_RECEIVE,
                subject: `Serviço escolhido *${service}*`,
                html: `
                email: ${email}
                name: ${name}
                service: ${service}
                message: ${message}
                `
            }).then(() => {
                return res.status(201).json({
                    result: true
                })
            }).catch(() => {
                return res.status(500).json({
                    result: false,
                    error: "Erro interno"
                })
            })
        }