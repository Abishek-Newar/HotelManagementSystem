import mongoose from "mongoose"

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    unmarriedFriendly:{
        type: Boolean,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    createdBy:{
        type: String,
        required: true
    }
})

const hotel = mongoose.model("hotel",hotelSchema)

export default hotel