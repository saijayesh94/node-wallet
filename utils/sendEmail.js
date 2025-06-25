import nodemailer from 'nodemailer'


const sendEmail = async (options)=>{
    const transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    })
    const mailOptions = {
        from:'tba4207@gmail.com',
        to:options.to,
        subject:options.subject,
        text:options.text
    }
    await transporter.sendMail(mailOptions)
}

export default sendEmail