import dotenv from "dotenv"
dotenv.config()
const env = {
    PORT: process.env.PORT || 8080,
    MONGO_URL: process.env.MONGO_URL || "",
    SECRET_KEY: process.env.SECRET_KEY || "",
    API_KEY: process.env.API_KEY || "",
    AUTH_Domain: process.env.AUTH_Domain || "",
    PROJECT_Id: process.env.PROJECT_Id || "",
    STORAGE_Bucket: process.env.STORAGE_Bucket || "",
    APP_Id: process.env.APP_Id || "",
    MEASUREMENT_Id: process.env.MEASUREMENT_Id || ""
}

export default env


