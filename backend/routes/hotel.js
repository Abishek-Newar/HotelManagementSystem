const express = require("express");
const { Queries, Room, User } = require("../db");

const hotelRouter = express.Router();

// hotelRouter.post("/checkavailability", async (req, res) => {
//     const body = req.body()
//     try {

//     } catch (error) {

//     }
// })

hotelRouter.post("/bookroom", async(req,res)=>{
    const {fromDate,toDate,roomType,guests} = req.body;
    const userId = req.userId;
    try {
        const bookedRooms = await Room.find({roomType: body.roomType})

            bookedRooms.forEach((item)=>{
                const BookedFromDate = parseInt(item.fromDate.slice(8,10))
                const BookedFromMonth = parseInt(item.fromDate.slice(5,8))
                const BookedToDate = parseInt(item.toDate.slice(8,10))
                const BookedToMonth = parseInt(item.toDate.slice(5,8))
                const checkFromDate = parseInt(fromDate.slice(8,10))
                const checkFromMonth = parseInt(fromDate.slice(5,8))
                const checkToDate = parseInt(toDate.slice(8,10))
                const checkToMonth = parseInt(toDate.slice(5,8))
                if(BookedFromDate<= checkFromDate && BookedFromMonth <=checkFromMonth && BookedToDate>=checkToDate && BookedToMonth >=checkToMonth ){
                    return res.status(403).json({msg: "already booked at date"})
                } 
            })
        const bookedBy = await User.findOne({_id: userId})
        const response = await Room.create({
            fromDate: fromDate,
            toDate: toDate,
            roomType: roomType,
            guests: guests,
            bookedBy: JSON.stringify(bookedBy)
        })
        res.json({msg: "booked sucessfully"})
    } catch (error) {
        console.log("error while booking room",error)
        res.status(401).json({msg: "error while booking room"})
    }
})



hotelRouter.post("/contact", async (req, res) => {
    const body = req.body;

    try {
        const response = await Queries.create({
            name: body.name,
            email: body.email,
            phone: body.phone,
            querriesRelatedTo: body.queriesRelatedTo,
            resolved: false
        })
        res.json({msg: "Added queries Sucessfully"})
    }catch(error){
        res.json({msg: "error while putting queries"})
        console.log("Error while adding queries",error)
    }
})






module.exports = hotelRouter