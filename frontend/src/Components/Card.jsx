import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

const Card = ({ image, title, location, price }) => {
    return (
        <div className='w-[17vw] h-[450px] flex items-end shadow-md font-primary rounded-3xl' style={{ background: `url(${image})` }}>
            <div className='bg-bgColor w-full h-[130px] px-10'>
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <div className='flex gap-2 items-center '>
                    <IoLocationOutline className='text-secondaryC text-lg' />
                    <p className='text-secondaryText text-sm  '>{location}</p>
                </div>
                <h1 className='text-3xl font-semibold'>$ {price}</h1>
            </div>
        </div>
    )
}

export default Card