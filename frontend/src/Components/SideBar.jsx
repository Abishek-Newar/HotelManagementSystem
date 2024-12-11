import React from 'react'

const SideBar = ({details}) => {
    console.log(details)
  return (
    <div className='w-[30vw]'>
        {
            details.map((item,index)=>(
                <div key={index}>
                    {item}
                </div>
            ))
        }
    </div>
  )
}

export default SideBar