const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lynk.crm@gmail.com',
        pass: 'lynklynk'
    }
})

console.log("nodemailer is ready, can send email now");

module.exports = transporter