
import { hotelValidator } from "../../config/helpers/validators.js"
import hotel from "../../config/schema/hotel.schema.js"
import { fileUpload } from "../model/hotel.model.js"


export const addHotel = async(req,res) =>{
    const body = req.body
    const file = req.file
    console.log(file)
    console.log(body)
    try {
        // const success = hotelValidator.safeParse(body)
        // if(!success.success){
        //     return res.status(401).json({msg: "data not in format"})
        // }
        const url = await fileUpload(file)
        const response = await hotel.create({
            name: body.name,
            area: body.area,
            city: body.city,
            state: body.state,
            price: body.price,
            unmarriedFriendly: body.unmarriedFriendly,
            image: url,
            AcRoomA: body.AcRoomA,
            NonAcRoomA: body.NonAcRoomA,
            TotalAc: body.TotalAc,
            TotalNonAc: body.TotalNonAc,
            status: true,
            createdBy: req.userId
        })

        res.json({msg: "hotel added"})
    } catch (error) {
        console.log(error)
        return res.status(403).json({msg: "error while adding hotel "})
    }
}

export const updateHotel = async(req,res)=>{
    const body = req.body;
    try {
        const response = await hotel.updateOne({createdBy: req.userId},{
            name: body.name,
            area: body.area,
            city: body.city,
            state: body.state,
            price: body.price,
            unmarriedFriendly: body.unmarriedFriendly,
            image: url,
            AcRoomA: body.AcRoomA,
            NonAcRoomA: body.NonAcRoomA,
            TotalAc: body.TotalAc,
            TotalNonAc: body.TotalNonAc,
            status: body.status,
            createdBy: req.userId
        })
        res.json({msg: "hotel updated"})
    } catch (error) {
        console.log("updating hotel",error)
        return res.status(401).json({msg: "error while updating"})
    }
}

