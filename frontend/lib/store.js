import {configureStore, createSlice} from "@reduxjs/toolkit"


const hotelSlice = createSlice({
    name: 'searchHotel',
    initialState: {
        location: null,
        fromDate: null,
        toDate: null,
        guests: null,
        rooms: null,
        roomType: null
    },
    reducers: {
        updateItem: (state,action) =>{
            state.location= action.payload.location,
            state.fromDate= action.payload.fromDate,
            state.toDate= action.payload.toDate,
            state.guests= action.payload.guests,
            state.rooms= action.payload.rooms,
            state.roomType= action.payload.RoomType
        }
    }
})

export const {updateItem} = hotelSlice.actions

export const store = configureStore({
    reducer:{
        updateItem: hotelSlice.reducer
    }
})