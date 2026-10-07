import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = '$'

const App = () => {
  const [token, settoken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {
        token === "" ? (
          <Login setToken={settoken} />
        ) : (
          <>
            <Navbar setToken={settoken} />
            <hr />
            <div className='flex w-full'>
              <Sidebar />
              <div className='w-[70%] ml-[max(5vw,25px)] my-8 text-gray-800 text-base'>
                <Routes>
                  <Route path='/add' element={<Add token={token} />} />
                  <Route path='/list' element={<List token={token} />} />
                  <Route path='/orders' element={<Orders token={token} />} />
                </Routes>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default App