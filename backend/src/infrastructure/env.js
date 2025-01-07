import dotenv from "dotenv"
dotenv.config()
const env = {
    PORT: process.env.PORT || 8080,
    MONGO_URL: process.env.MONGO_URL || "",
    SECRET_KEY: process.env.SECRET_KEY || "",
    AWS_ACCESS_ID: process.env.AWS_ACCESS_KEY || "",
    AWS_SECRET_KEY: process.env.AWS_SECRET_ACCESS_KEY || "",
    MAILER_ID: process.env.MAILER_ID || "",
    MAILER_PASS: process.env.MAILER_PASS || "",
    CLOUDFRONT_DOMAIN: process.env.CLOUDFRONT_DOMAIN || ""
}

export default env


