import React, { useEffect, useState } from 'react'
import axios from "axios"
const CheckAvailabity = () => {
  const [from,setFrom] = useState();
  const [toDate,setToDate] = useState();
  const [guest,setGuest] = useState();
  const [acRoom,setAcRoom] = useState(false);
  const [nonAcRoom,setNonAcRoom] = useState(false);
  const checkAvailableRoom = async() =>{
    console.log(acRoom)
    const response = await axios.post("http://localhost:3001/hotel/checkavailability",{
      fromDate: from,
      toDate: toDate,
      guests: guest
    })
    console.log(response.data.acRoom)
    
    setAcRoom(response.data.ac);
    setNonAcRoom(response.data.nonac)
    
  }
  useEffect(() => {
    console.log('acRoom updated:', acRoom);
  }, [acRoom]);
    return (
    <div>
      <div className='flex justify-around items-center py-10 flex-col md:flex-row'>
      <label htmlFor="from">
        <p className='uppercase font-bold text-2xl'>From</p>
        <input type="date" name="" id="from" className='border-2 rounded-lg h-12 w-44 p-2' onChange={(e)=>setFrom(e.target.value)} />
      </label>
      <label htmlFor="todate">
        <p className='uppercase font-bold text-2xl'>To</p>
        <input type="date" name="" id="todate" className='border-2 rounded-lg h-12 w-44 p-2' onChange={(e)=>setToDate(e.target.value)}/>
      </label>
      <label htmlFor="guest">
        <p className='uppercase font-bold text-2xl'>Guests</p>
        <input type="number" id='guest' className='border-2 rounded-lg h-12 w-44 p-2' onChange={(e)=>setGuest(e.target.value)}/>
      </label>
      <button onClick={checkAvailableRoom} className='h-12 rounded-lg text-white text-lg font-bold hover:bg-blue-600 border bg-blue-400 px-6 py-2 text-center'>Check Availability</button>
      
    </div>
    <div>
        {
          acRoom?
          (
            <div className='min-h-32 bg-green-400'>
              <button>Book</button>
            </div>
          )
          :
          null
        }
        {
          nonAcRoom?
          (
            <div className='min-h-32 bg-green-400'>
              <button>Book</button>
            </div>
          )
          :
          null
        }
      </div>
    </div>
  )
}

export default CheckAvailabity