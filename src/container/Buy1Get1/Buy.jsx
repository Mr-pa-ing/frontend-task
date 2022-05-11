import React from 'react'
import Card from '../../components/Card'

const Buy = () => {
  return (
    <section className='bg-yellow-400 p-5 pb-8 mt-4'>
            <div className='flex justify-between align-middle my-8'>
                <h1 className='text-3xl font-medium uppercase ml-3'>Buy 1 Get 1</h1>
                <p className='font-medium mt-3 mr-8 cursor-pointer hidden md:block'>View More</p>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-6'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
    </section>
  )
}

export default Buy