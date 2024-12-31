import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
const Deals = () => {
  return (
    <div className='min-h-screen bg-black font-primary py-[7vh]'>
      <h1 className='text-center text-white'>Exclusive deal on</h1>
      <h1 className='text-center text-white text-[220px] leading-none'>Stayhub</h1>
      <div className='w-full flex flex-col gap-10'>
        <div className='flex justify-evenly'>
          <div className='w-[45vw] h-[60vh] rounded-[40px] p-10  bg-secondaryC'>
            <div className='flex text-white  justify-between'>
              <div>
                <h1 className='text-7xl '>Hotels</h1>
                <p className=''>Your dream destination awaits,</p>
                <p className=''>book moments, make</p>
                <p className=''>memories</p>
              </div>
              <FaArrowCircleUp className='text-7xl rotate-[35deg]' />
            </div>
          </div>
          <div className='w-[24vw] h-[60vh] flex items-end shadow-md font-primary rounded-3xl overflow-hidden' style={{ background: `url("https://img.freepik.com/free-photo/suite-bedroom-sleep-pillows-home_1203-4103.jpg?t=st=1734847198~exp=1734850798~hmac=1253d162a67e8addce71eff459b63adf5046c5942dfd45c36676cdd8c96c3f1b&w=740")`, backgroundSize: "cover", backgroundPosition: "0 -150px" }}>
            <div className='bg-bgColor w-full h-[150px] flex flex-col justify-around px-10'>
              <div>
              <h1 className='text-2xl font-semibold'>Lalit</h1>
              <div className='flex gap-2 items-center '>
                <IoLocationOutline className='text-secondaryC text-lg' />
                <p className='text-secondaryText text-sm  '>Chandigarh, India</p>
              </div>
              </div>
              <h1 className='text-4xl font-semibold'>$ 2500</h1>
            </div>
          </div>
          <div className='w-[24vw] h-[60vh] flex items-end shadow-md font-primary rounded-3xl overflow-hidden' style={{ background: `url("https://img.freepik.com/premium-photo/bedroom-with-chandelier-bed-with-chandelier-hanging-from-ceiling_517312-59685.jpg?w=740")`, backgroundSize: "cover", backgroundPosition: "0 -150px" }}>
            <div className='bg-bgColor w-full h-[150px] flex flex-col justify-around px-10'>
              <div>
              <h1 className='text-2xl font-semibold'>Taj</h1>
              <div className='flex gap-2 items-center '>
                <IoLocationOutline className='text-secondaryC text-lg' />
                <p className='text-secondaryText text-sm  '>Mohali, India</p>
              </div>
              </div>
              <h1 className='text-4xl font-semibold'>$ 3000</h1>
            </div>
          </div>
        </div>
        <div className='flex justify-evenly'>
        <div className='w-[24vw] h-[60vh] flex items-end shadow-md font-primary rounded-3xl overflow-hidden' style={{ background: `url("https://img.freepik.com/free-photo/way-white-house_1162-117.jpg?t=st=1734873038~exp=1734876638~hmac=c9f57137296aa2e0edcee79bd9303339086c47f16b34ac86b9e68c98dc46c3b5&w=1380")`, backgroundSize: "cover", backgroundPosition: "0 0" }}>
            <div className='bg-bgColor w-full h-[150px] flex flex-col justify-around px-10'>
              <div>
              <h1 className='text-2xl font-semibold'>Lalit</h1>
              <div className='flex gap-2 items-center '>
                <IoLocationOutline className='text-secondaryC text-lg' />
                <p className='text-secondaryText text-sm  '>Chandigarh, India</p>
              </div>
              </div>
              <h1 className='text-4xl font-semibold'>$ 2500</h1>
            </div>
          </div>
          <div className='w-[24vw] h-[60vh] flex items-end shadow-md font-primary rounded-3xl overflow-hidden' style={{ background: `url("https://img.freepik.com/free-photo/white-concrete-building-with-balconies_250224-234.jpg?t=st=1734873047~exp=1734876647~hmac=aebf299ae092b50fe56befcdcdb1f29cbca539a65059726457da77b3dc0da2e3&w=740")`, backgroundSize: "cover", backgroundPosition: "0 -200px" }}>
            <div className='bg-bgColor w-full h-[150px] flex flex-col justify-around px-10'>
              <div>
              <h1 className='text-2xl font-semibold'>Taj</h1>
              <div className='flex gap-2 items-center '>
                <IoLocationOutline className='text-secondaryC text-lg' />
                <p className='text-secondaryText text-sm  '>Mohali, India</p>
              </div>
              </div>
              <h1 className='text-4xl font-semibold'>$ 3000</h1>
            </div>
          </div>
          <div className='w-[45vw] h-[60vh] rounded-[40px] p-10  bg-secondaryC'>
            <div className='flex text-white  justify-between'>
              <div>
                <h1 className='text-7xl '>Villas</h1>
                <p className=''>Your dream destination awaits,</p>
                <p className=''>book moments, make</p>
                <p className=''>memories</p>
              </div>
              <FaArrowCircleUp className='text-7xl rotate-[35deg]' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Deals