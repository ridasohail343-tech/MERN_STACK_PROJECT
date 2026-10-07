import React from 'react';


const Newsletter = () => {
    const SubmitHandler=((event)=>{
        event.preventDefault();
      
    })
  return (
    <div className='text-center'>
        <div className='text-2xl font-medium text-gray-800'>Subscribe Now and get 20% off</div>
        <p className='text-gray-500 mt-3'>Subscribe now and get exclusive offers, updates, and special deals delivered straight to you</p>
        <form  onSubmit={SubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='enter your email' id="" />
            <button type='submit' className='bg-black text-white text-sm px-10 py-4'>Subscribe Now</button>
        </form>
      
    </div>
  );
}

export default Newsletter;
