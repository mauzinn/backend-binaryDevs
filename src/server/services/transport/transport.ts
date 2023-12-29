import nodemailer from 'nodemailer'


//Transport
    export const transport = nodemailer.createTransport({
        port: 587,
        host: "smtp.gmail.com",
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    })