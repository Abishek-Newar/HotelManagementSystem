import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: env.MAILER_ID,
        pass: env.MAILER_PASS
    }
})


export const sendWarningMail = async(email)=>{
    try {
        const config = {
            from: env.MAILER_ID,
            to:email,
            subject:"WARNING for hotel rules violation",
            html:`
            <div>keep check of the hotel rules violation</div>
            `
        }
        await transporter.sendMail(config)
    } catch (error) {
        console.log("error while sending mail",error)
        return error
    }
}