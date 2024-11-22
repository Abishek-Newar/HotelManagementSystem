
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
            createdBy: body.createdBy
        })

        res.json({msg: "hotel added"})
    } catch (error) {
        console.log(error)
        return res.status(403).json({msg: "error while adding hotel "})
    }
}

