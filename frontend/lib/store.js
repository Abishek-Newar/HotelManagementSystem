import {configureStore,createSlice} from "@reduxjs/toolkit"

const hotelSlice = createSlice({
    name: "searchDetails",
    initialState: {
        location: null,
        from: null,
        to: null,
        guests: null,
        Rooms: null,
        RoomType: null
    },
    reducers: {
        addItem: (state,action) =>{
            state.location = action.payload.location
            state.from = action.payload.fromDate
            state.to = action.payload.toDate
            state.guests = action.payload.guests
            state.Rooms = action.payload.rooms
            state.RoomType = action.payload.roomtype
        }
    }
})

export const { addItem} = hotelSlice.actions
export const store = configureStore({
    reducer:{
        searchDetails: hotelSlice.reducer
    }
})