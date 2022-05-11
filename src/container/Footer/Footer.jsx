import React from 'react'

const Footer = () => {
  return (
      <>
      <section className='bg-red-600 p-4 text-white'>
        <div className='mb-8 grid sm:grid-cols-3'>
            <div className='mb-4'>
                <h2 className='font-medium'>Customer Service</h2>
                <h2 className='mt-3'>Terms &amp; Privacy Policy</h2>
                <h2 className='mt-3'>Return Policy</h2>
            </div>
            <div className='mb-4'>
                <h2 className='font-medium'>Language</h2>
                <h2 className='mt-3'>Myanmar(Unicode)</h2>
                <h2 className='mt-3'>English</h2>
            </div>
            <div className='mb-4'>
                <h2 className='font-medium'>Contact Us</h2>
                <h2 className='mt-3'>No 17B, Myaykha St, Mayangone, <br/> 6 Miles ,Yangon, Myanmar</h2>
                <h2 className='mt-3'>+95 9 345 454 345</h2>
            </div>
        </div>
    </section>
    <h2 className='font-medium text-center my-2'>All rights reserved.Made with all the love in ShopDoora Co., Ltd.</h2>
    </>
  )
}

export default Footer