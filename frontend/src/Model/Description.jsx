import React from 'react'
import Card from '../Components/Card'

const Description = () => {
  return (
    <div className='font-primary pt-20 pb-20 bg-bgColor flex flex-col gap-14'>
        <h1 className='text-center text-5xl font-semibold '>Seamless Experience</h1>
        <div className='flex flex-wrap justify-evenly '>
            <Card title="Taj" location="Mohali, India" image="https://img.freepik.com/free-photo/hotel-lobby_23-2149397559.jpg?uid=R155336080&ga=GA1.1.639662429.1734707439&semt=ais_hybrid" price="2500" />
            <Card title="Taj" location="Mohali, India" image="https://img.freepik.com/free-photo/hotel-lobby_23-2149397559.jpg?uid=R155336080&ga=GA1.1.639662429.1734707439&semt=ais_hybrid" price="2500" />
            <Card title="Taj" location="Mohali, India" image="https://img.freepik.com/free-photo/hotel-lobby_23-2149397559.jpg?uid=R155336080&ga=GA1.1.639662429.1734707439&semt=ais_hybrid" price="2500" />
            <Card title="Taj" location="Mohali, India" image="https://img.freepik.com/free-photo/hotel-lobby_23-2149397559.jpg?uid=R155336080&ga=GA1.1.639662429.1734707439&semt=ais_hybrid" price="2500" />
        </div>
    </div>
  )
}

export default Description