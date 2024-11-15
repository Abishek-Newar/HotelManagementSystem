import dotenv from "dotenv"
dotenv.config()
const env = {
    PORT: process.env.PORT || 8080,
    MONGO_URL: process.env.MONGO_URL || "",
    SECRET_KEY: process.env.SECRET_KEY || ""
}

export default env