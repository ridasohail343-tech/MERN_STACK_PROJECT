import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [Visible, setVisible] = useState(false)
  const { setShowSearch,getCartCount,navigate,token,settoken,setCartItems } = useContext(ShopContext)
  const logout =()=>{
     navigate('/login')
    localStorage.removeItem('token')
    settoken('')
    setCartItems({})
  }

  return (
    <div className='flex items-center justify-between font-medium'>
      <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>
      <ul className='hidden sm:flex gap-5 text-gray-700 text-sm'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
        </NavLink>
        <NavLink to='/Collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
        </NavLink>
        <NavLink to='/About' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
        </NavLink>
        <NavLink to='/Contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search} className='w-6 cursor-pointer' alt="search" />

        <div className='group relative'>
         <Link to='/Login'><img onClick={()=>token ? null:navigate('/login')} src={assets.profile} className='w-6 cursor-pointer' alt="profile" /></Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 py-4 px-5 w-39 bg-amber-100 text-gray-500 rounded'>
              <p  onClick={()=>navigate('/')} className='cursor-pointer hover:text-black'>My Profile</p>
              <p onClick={()=>navigate('/Orders')} className='cursor-pointer hover:text-black'>Orders</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/Cart' className='relative'>
          <img src={assets.cart} className='w-9 min-w-5' alt="cart" />
          <p className='absolute -right-1.25 -bottom-1.25 rounded-full w-5 text-[10px] pt-0.5 text-center leading-4 bg-black text-white aspect-square'>{getCartCount()}</p>
        </Link>

        <img onClick={() => setVisible(true)} src={assets.menu} className='w-6 cursor-pointer sm:hidden' alt="menu" />

        {/* sidebar menu for small screens */}
        <div className={`absolute top-0 bottom-0 right-0 left-0 overflow-hidden bg-white transition-all ${Visible ? "w-full" : "w-0"}`}>
          <div className='flex flex-col text-gray-300'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 py-5'>
              <img className='rotate-180 h-4 text-black' src={assets.back} alt="" />
              <p>Back</p>
            </div>
            <NavLink className='border py-5 pl-3 text-gray-400' onClick={() => setVisible(false)} to='/'>Home</NavLink>
            <NavLink className='border py-5 pl-3 text-gray-400' onClick={() => setVisible(false)} to='/Collection'>Collection</NavLink>
            <NavLink className='border py-5 pl-3 text-gray-400' onClick={() => setVisible(false)} to='/About'>About</NavLink>
            <NavLink className='border py-5 pl-3 text-gray-400' onClick={() => setVisible(false)} to='/Contact'>Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar