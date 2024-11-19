import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        min: [6, 'password less length'],
        required: true
    }
})

const admin = mongoose.model("admin",adminSchema)

export default admin