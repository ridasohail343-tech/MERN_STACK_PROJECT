import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* hero left side */}
      <div className='w-full sm:w-1/2 min-w-0 flex items-center justify-center py-4 sm:py-0'>
        <div className='text-black'>
          <div className='flex flex-col items-center gap-1'>
            <div className='flex items-center gap-3'>
              <p className='w-8 md:w-11 h-1 bg-gray-600'></p>
              <p className='prata-regular font-medium text-sm md:text-base'>OUR BEST SELLERS</p>
            </div>
            <h1 className='text-3xl lg:text-5xl leading-tight py-1'>Latest Arrivals</h1>
            <div className='flex items-center gap-3'>
              <p className='font-semibold text-sm md:text-base'>SHOP IN</p>
              <p className='w-8 md:w-11 h-1 bg-gray-600'></p>
            </div>
          </div>
        </div>
      </div>
      {/* hero right side */}
      <img className='w-full sm:w-1/2 min-w-0' src={assets.hero} alt="" />
    </div>
  );
}

export default Hero;