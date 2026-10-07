import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Search from './components/Search'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
     <div className='px-4  sm:px-[5vw]  md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <Search/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Collection' element={<Collection/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Cart' element={<Cart/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Orders' element={<Orders/>}/>
       <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
       <Route path='/product/:productId' element={<Products/>}/>
      </Routes>
      <Footer/>
     </div>
    </>
  )
}

export default App
