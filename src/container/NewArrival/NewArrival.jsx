import React from 'react'
import NewArrivalCard from '../../components/NewArrivalCard'

const NewArrival = () => {
  return (
    <div className='m-4 mb-16'>
            <div className='flex justify-between align-middle my-8'>
                <h1 className='text-3xl font-medium uppercase mt-4 ml-3'>New Arrival</h1>
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

export default NewArrival