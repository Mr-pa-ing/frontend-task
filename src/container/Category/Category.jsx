import React from 'react'
import CardCategory from '../../components/CardCategory'

const Category = () => {
  return (
    <div>
      <h1 className='text-center text-3xl font-medium uppercase my-6'>Categories</h1>
      <div className='flex justify-around '>
        <div>
          <CardCategory/>
        </div>
        <div>
          <CardCategory/>
        </div>
        <div className='hidden md:block'>
          <CardCategory/>
        </div>
        <div className='hidden md:block'>
          <CardCategory/>
        </div>
        <div className='hidden lg:block'>
          <CardCategory/>
        </div>
        <div className='hidden lg:block'>
          <CardCategory/>
        </div>
        <div className='hidden lg:block'>
          <CardCategory/>
        </div>
        <div className='w-28'>
          <h2 className='text-red-500 text-lg font-medium cursor-pointer'>View More</h2>
        </div>
      </div>
    </div>
  )
}

export default Category