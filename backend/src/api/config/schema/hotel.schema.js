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
    }
})

const hotel = mongoose.model("hotel",hotelSchema)

export default hotel