import React from 'react'
import Input from "../Components/Input"
import Select, { Option } from '../Components/Select'
import {BACKEND_URL} from "../../config"
import axios from "axios"
import {toast, Toaster} from "sonner"
import { useNavigate } from 'react-router-dom'
const AddHotel = () => {
  const navigate = useNavigate()
  const [details,setDetails] = React.useState({
    name: "",
    area: "",
    city: "",
    state: "",
    price: null,
    unmarriedFriendly: null,
    image: null,
    AcRoomA: null,
    NonAcRoomA: null,
    TotalAc: null,
    TotalNonAc: null
  })

  const states = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal" ];

  function handleChange({type,e}){
    setDetails({
      ...details,
      [type]: e.target.value
    })
  }

  async function handleSubmit(){
    let formData = new FormData();
    formData.append("name",details.name);
    formData.append("area",details.area)
    formData.append("city",details.city)
    formData.append("state",details.state)
    formData.append("price",details.price)
    formData.append("unmarriedFriendly",details.unmarriedFriendly)
    formData.append("file",details.image)
    formData.append("AcRoomA",details.AcRoomA)
    formData.append("NonAcRoomA",details.NonAcRoomA)
    formData.append("TotalA",details.TotalAc)
    formData.append("TotalNonAc",details.TotalNonAc)

    try {
      const response = await axios.post(`${BACKEND_URL}/v1/owner/addhotel`,formData,{
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
      toast.success("hotel added")
      setTimeout(()=>{
        navigate("/seller/dashboard")
      },2000)
    } catch (error) {
      toast.error("error adding hotel")
      console.log("error adding hotel",error)
    }
  }
  return (
    <div>
      <Toaster />
      <Input type="text" placeholder="John Doe" name="Name" id="name" onChange={(e)=>{handleChange("name",e)}} />
      <Input type="text" placeholder="" name="Area" id="area" onChange={(e)=>{handleChange("area",e)}} />
      <Input type="text" placeholder="" name="City" id="city" onChange={(e)=>{handleChange("city",e)}} />
      <Select title="State">
         <Option value="">Select</Option>
         {
          states.map((item,index)=>(
            <Option key={index} value={item}>{item}</Option>
          ))
         }
      </Select>
      <Input type="number" placeholder="500" name="Price" id="price" onChange={(e)=>{handleChange("price",e)}} />
      <Select title="Unmarried Friendly">
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
      </Select>
      <Input type="file" placeholder="" name="Image" id="image" onChange={(e)=>{handleChange("image",e)}} />
      <Select title="Ac Room Available">
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
      </Select>
      <Select title="Non-Ac Room Available">
        <Option value="true">Yes</Option>
        <Option value="false">No</Option>
      </Select>
      <Input type="number" placeholder="5" name="Total Ac Room" id="tar" onChange={(e)=>{handleChange("TotalAc",e)}} />
      <Input type="number" placeholder="5" name="Total Non-Ac Room" id="tnr" onChange={(e)=>{handleChange("TotalNonAc",e)}} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default AddHotel