import mongoose from "mongoose"


const bookSchema = new mongoose.Schema({
    fromDate :{
        type: Date,
        required: true
    },
    toDate:{
        type: Date,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    RoomType: {
        type: String,
        required: true
    },
    bookedBy: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: 'hotels',
        required: true
    }
})
const bookings = mongoose.model("bookings",bookSchema)

export default bookings;