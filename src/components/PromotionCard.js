import React from 'react'
import Shop from "../assets/shop.svg"

const PromotionCard = () => {
  return (
    <div className='mb-4'>
        <div className='w-58 md:w-48 h-48 bg-gray-300 mx-3 flex justify-end align-center rounded-lg relative'>
            <img src={Shop} alt="shop" className='h-10 w-10 mt-2 mr-2 cursor-pointer' />
            <div className='bg-red-600 w-16 absolute top-0 left-0 z-10'>
                <h2 className='text-sm text-white font-bold px-1'>00% Off</h2>
            </div>
        </div>
        
        <h1 className='ml-3 text-lg font-medium'>Sample Products with<br/> long name</h1>
        <h1 className='ml-3 text-lg font-medium text-red-600'>54,000 Ks</h1>
        <p className='ml-3 text-sm font-medium text-gray-600 line-through' >60,000 Ks</p>
    </div>
  )
}

export default PromotionCard