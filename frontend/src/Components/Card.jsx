import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

const Card = ({ image, title, location, price }) => {
    return (
        <div className='w-[19vw] h-[450px] flex items-end shadow-md font-primary rounded-3xl overflow-hidden' style={{ background: `url(${image})` }}>
            <div className='bg-bgColor w-full h-[150px] flex flex-col justify-around px-10'>
                <div>
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <div className='flex gap-2 items-center '>
                    <IoLocationOutline className='text-secondaryC text-lg' />
                    <p className='text-secondaryText text-sm  '>{location}</p>
                </div>
                </div>
                <h1 className='text-4xl font-semibold'>$ {price}</h1>
            </div>
        </div>
    )
}

export default Card