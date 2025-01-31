import mongoose,{Schema} from "mongoose"


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
    rooms:{
        type: Number,
        required: true
    },
    bill:{
        type: Number,
        required:true
    },
    RoomType: {
        type: String,
        required: true
    },
    bookedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }],
    hotelId: [{
        type: Schema.Types.ObjectId,
        ref: 'hotel',
        required: true
    }]
})
const bookings = mongoose.model("bookings",bookSchema)

export default bookings;