const express = require("express");
const { Queries } = require("../db");

const hotelRouter = express.Router();

// hotelRouter.post("/checkavailability", async (req, res) => {
//     const body = req.body()
//     try {

//     } catch (error) {

//     }
// })



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