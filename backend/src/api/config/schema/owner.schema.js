import mongoose from "mongoose"

const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        minLength: 10,
        maxLength: 10,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    idProof:{
        type: String,
        required: true
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    }
})

const owner = mongoose.model("owner",ownerSchema)
export default owner