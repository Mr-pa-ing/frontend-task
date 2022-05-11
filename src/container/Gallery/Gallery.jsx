import React from 'react'
import Asset1 from '../../assets/Asset1.png';
import Asset2 from '../../assets/Asset2.png';
import Asset3 from '../../assets/Asset3.png';

const Gallery = () => {
  return (
    <div className='m-8'>
        <div className='flex'>
            <div className='flex-1'>
                <img src={Asset1} alt='asset1' />
            </div>
            <div className='flex-1 mx-4'>
                <img src={Asset2} alt='asset2' />
            </div>
            <div className='flex-1'>
                <img src={Asset3} alt='asset3' />
            </div>
        </div>
    </div>
  )
}

export default Gallery