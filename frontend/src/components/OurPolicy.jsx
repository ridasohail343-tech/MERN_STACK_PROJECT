import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-10 text-xs sm:text-sm md:text-base text-gray-700 '>
      <div>
        <img src={assets.exchange} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-600'>We offer hustle free exchange policy</p>
      </div>
      <div>
        <img src={assets.money_back} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold'>7 days Return Policy</p>
        <p className='text-gray-600'>Enjoy a 7-Day Money-Back Guarantee,risk free</p>
      </div>
      <div>
        <img src={assets.support} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold'>Customer Support</p>
        <p className='text-gray-600'>We provide 24-h Customer Support</p>
      </div>
      
    </div>
  );
}

export default OurPolicy;
