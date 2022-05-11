import React from 'react'
import Phone from "../../assets/phone.png"
import NewArrivalCard from '../../components/NewArrivalCard'

const Item = ({name}) => {
  return (
    <div className='m-4 mb-16'>
            <div className='flex justify-between align-middle my-8'>
                <div className='flex justify-start align-middle'>
                    <img src={Phone} alt="phone" className='w-14 h-14 ml-2' />
                    <h1 className='text-3xl font-medium uppercase mt-2 ml-3'>{name}</h1>
                </div>
                <p className='text-gray-400 font-medium mt-8 mr-8 cursor-pointer hidden md:block'>View More</p>
     
            </div>
            
            <div className='grid md:grid-cols-3 lg:grid-cols-6'>
                <NewArrivalCard />
                <NewArrivalCard />
                <NewArrivalCard />
                <NewArrivalCard />
                <NewArrivalCard />
                <NewArrivalCard />
            </div>
    </div>
  )
}

export default Item