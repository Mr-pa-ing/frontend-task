import React from 'react'
import Shop from "../assets/shop.svg"

const NewArrivalCard = () => {
  return (
    <div className='mb-4'>
        <div className='w-58 md:w-48 h-48 bg-gray-300 mx-3 flex justify-end align-center rounded-lg'>
            <img src={Shop} alt="shop" className='h-10 w-10 mt-2 mr-2 cursor-pointer' />
        </div>
        <h1 className='ml-3 text-lg font-medium'>Sample Products with long name</h1>
        <h1 className='ml-3 text-lg font-medium text-red-500'>54,000 Ks</h1>
    </div>
  )
}

export default NewArrivalCard