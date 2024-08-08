import React from 'react'

const CheckAvailabity = () => {
  return (
    <div className='flex justify-around items-center py-10 flex-col md:flex-row'>
      <label htmlFor="from">
        <p className='uppercase font-bold text-2xl'>From</p>
        <input type="date" name="" id="from" className='border-2 rounded-lg h-12 w-44 p-2' />
      </label>
      <label htmlFor="todate">
        <p className='uppercase font-bold text-2xl'>To</p>
        <input type="date" name="" id="todate" className='border-2 rounded-lg h-12 w-44 p-2'/>
      </label>
      <label htmlFor="guest">
        <p className='uppercase font-bold text-2xl'>Guests</p>
        <input type="number" id='guest' className='border-2 rounded-lg h-12 w-44 p-2' />
      </label>
      <div className='flex items-center gap-6'>
      <label htmlFor="nonac" className='flex gap-4'>
        <p className='uppercase font-bold text-2xl'>Non-AC</p>
        <input type="radio" name='roomtype' id='nonac' className='w-4' />
      </label>
      <label htmlFor="ac" className='flex gap-4'>
        <p className='uppercase font-bold text-2xl'>AC</p>
        <input type="radio" name='roomtype' id='ac' className='w-4 ' />
      </label>
      </div>
      <button className='h-12 rounded-lg text-white text-lg font-bold hover:bg-blue-600 border bg-blue-400 px-6 py-2 text-center'>Check Availability</button>
    </div>
  )
}

export default CheckAvailabity