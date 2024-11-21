import mongoose from "mongoose"

const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        min: 10,
        max: 10,
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
    passowrd: {
        type: String,
        min: 6,
        required: true
    }
})

const owner = mongoose.model("owner",ownerSchema)
export default owner