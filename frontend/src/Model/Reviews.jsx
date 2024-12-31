import React from 'react'
import ReviewCard from '../Components/ReviewCard'
import { review } from '../../utils'

const Reviews = () => {
  return(
    <div className='bg-bgColor font-primary py-20'>
        <h1 className='text-center mb-10 text-2xl font-semibold'>Discover the timeless charm of Stayhub</h1>
        <div className='flex  justify-around'> 
          {
            review.map((item,index)=>(
              <ReviewCard author={item.author} quote={item.quote} />
            ))
          }
        </div>
    </div>
  )
}

export default Reviews 