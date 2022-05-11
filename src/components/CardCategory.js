import React from 'react'
import Phone from "../assets/phone.png"

const CardCategory = () => {
  return (
    <div className='w-28 flex justify-center align-middle flex-col'>
        <img src={Phone} alt="phone" className='w-inherit' />
        <h2 className='text-black text-lg font-bold text-center'>Sample <br/> Category</h2>
    </div>
  )
}

export default CardCategory