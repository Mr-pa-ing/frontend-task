import React from 'react'
import Apple from "../../assets/apple.png"
import Samsung from "../../assets/samsung.png"
import Google from "../../assets/google.png"
import Oneplus from "../../assets/oneplus.jpg"
import Mi from "../../assets/mi.png"
import Huawei from "../../assets/huawei.png"
import Realme from "../../assets/realme.png"

const Brand = () => {
  return (
    <div className='m-4 mb-8'>
            <h1 className='text-3xl font-medium uppercase my-4 ml-3'>View By Brands</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 m-4'>
                <div className='w-20 h-20'>
                    <img src={Apple} alt="apple" className='w-inherit mx-auto' />
                </div>
                <div className='w-28 h-20 mt-4'>
                    <img src={Samsung} alt="samsung" className='w-inherit' />
                </div>
                <div className='w-20 h-20'>
                    <img src={Google} alt="google" className='w-inherit' />
                </div>
                <div className='w-32 h-20'>
                    <img src={Oneplus} alt="oneplus" className='w-inherit' />
                </div>
                <div className='w-20 h-20'>
                    <img src={Mi} alt="mi" className='w-inherit' />
                </div>
                <div className='w-32 h-20 mt-4'>
                    <img src={Realme} alt="mi" className='w-inherit' />
                </div>
                <div className='w-20 h-20'>
                    <img src={Huawei} alt="huawei" className='w-inherit' />
                </div>
                <h2 className='font-medium text-red-500 cursor-pointer mr-4 mt-8'>View All</h2>
            </div>
    </div>
  )
}
export default Brand