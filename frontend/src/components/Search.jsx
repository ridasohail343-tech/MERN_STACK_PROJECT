import React, { useContext,useState,useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const { search, showSearch, setSearch, setShowSearch } = useContext(ShopContext);
  const location=useLocation();
  const [visible, setvisible] = useState(false)
  useEffect(() => {
    if(location.pathname.includes('Collection')){
        setvisible(true)
    }else{
        setvisible(false)
    }
  }, [location])
  

  return showSearch && visible ?(
    <div className='border-t border-b bg-amber-50 text-center py-4'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-8 rounded-full w-3/4 sm:w-1/2'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-inherit text-sm'
          type="text"
          placeholder='Search'
        />
        <img className='w-4 mr-2' src={assets.search} alt="search" />
        <img
          onClick={() => setShowSearch(false)}
          className='w-3 cursor-pointer'
          src={assets.cross_icon}
          alt="close"
        />
      </div>
    </div>
  ) : null;
};

export default Search;