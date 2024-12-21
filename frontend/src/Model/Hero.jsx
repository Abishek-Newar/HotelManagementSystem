import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { GoPeople } from "react-icons/go";

const Hero = () => {
  const [values,setValues] = React.useState({
    value: "Mohali",
    fromDate: null,
    toDate: null,
    guests: 1,
    RoomType: null,
    rooms: 1,
  })

  function handleSubmit(){

  }
  return (
    <div className='relative bg-bgColor min-h-screen pt-[10vh] font-primary'>
        <p className='text-center text-2xl font-primary'>Unforgettable stays awaits on</p>
        <h1 className='text-center font-primary text-[270px] p-0  leading-none '>dream stay</h1>
        <img className='absolute w-[84vw] h-[50vh] bg-cover translate-x-[8vw] top-[38.5vh] rounded-xl' src="/bedroom.jpg" alt="" />
        <div className='absolute w-[75vw] h-[10vh] border border-secondaryText bg-[#E4E3DF] translate-x-[13vw] top-[83vh] rounded-2xl flex justify-between p-4'>
          <label forhtml="location">
            <div className='flex gap-2 items-center text-lg'>
              <IoLocationOutline className='text-secondaryC' />
              <p className='text-secondaryText  '>City or Destintaion</p>
            </div>
            <input type="text" className='bg-transparent focus:border-none text-center' id='location' value={values.value} />
          </label>
          <label forhtml="bookingdate">
          <div   className='flex gap-2 items-center text-lg'>
              <MdOutlineDateRange className='text-secondaryC' />
              <p>Booking Dates</p>
            </div>
            <div className='flex gap-2'>
            <input  type="date" name="" id="bookingdate"  className='bg-transparent w-28'/>
            <input type="date" name="" id=""  className='bg-transparent w-28'/>
            </div>

          </label>
          <div>
          <div  className='flex gap-2 items-center text-lg'>
              <GoPeople  className='text-secondaryC'/>
              <p>Guests and Rooms</p>
            </div>
            <div className='flex text-xl font-primary  justify-center' style={{fontWeight:"800"}}> 
              <p>{values.guests} Adults,</p>
              <p>{values.rooms} Rooms</p>
            </div>
          </div>
          <div onClick={handleSubmit} className='h-full w-[7vh] rounded-2xl invert-0 flex justify-center items-center bg-secondaryC'>
            <FaSearch className='w-6 h-6 text-white '  />
          </div>
        </div>
    </div>
  )
}

export default Hero