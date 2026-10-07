import React from 'react';

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb3' >
      <p className='text-gray-500'>{text1}<span className='text-gray-700 font-me'>{text2}</span></p>
      <p className='w-8 md:w-11 h-1 sm:h-1 bg-gray-700'></p>
    </div>
  );
}

export default Title;
