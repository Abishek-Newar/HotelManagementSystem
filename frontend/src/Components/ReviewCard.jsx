import React from 'react'

const ReviewCard = ({author,quote}) => {
  return (
    <div className='w-[400px] h-[250px] border border-black rounded-md flex flex-col justify-center p-10 '>
        <div className='flex flex-col gap-8'>
        <h1 className=' font-primary font-semibold'>"{quote}"</h1>
        <p className='font-logo text-right'>- {author}</p>
        </div>
    </div>
  )
}

export default ReviewCard