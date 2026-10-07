import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setFormData((data) => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    if (!token) {
      toast.error('Please login first')
      return navigate('/login')
    }

    try {
      let orderItems = []

      for (const productId in cartItems) {
        for (const size in cartItems[productId]) {
          if (cartItems[productId][size] > 0) {
            const product = products.find((p) => p._id === productId)
            if (product) {
              const itemInfo = structuredClone(product)
              itemInfo.size = size
              itemInfo.quantity = cartItems[productId][size]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      if (orderItems.length === 0) {
        return toast.error('Your cart is empty')
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      }

      switch (method) {
        case 'cod': {
          const response = await axios.post(
            backendUrl + '/api/order/place',
            orderData,
            { headers: { token } }
          )
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
          break
        }
        default:
          toast.info('This payment method is not available yet')
          break
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const inputClass = 'border border-gray-300 py-1.5 px-3.5 w-full rounded'

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col sm:flex-row justify-between gap-20 pt-5 sm:p-14 border-t min-h-[80vh]'
    >
      {/* ----------------- left side ------------------ */}
      <div className='flex flex-col gap-4 w-full sm:max-w-120'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName}
            className={inputClass} type='text' placeholder='First name' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName}
            className={inputClass} type='text' placeholder='Last name' />
        </div>

        <input required onChange={onChangeHandler} name='email' value={formData.email}
          className={inputClass} type='email' placeholder='Email address' />
        <input required onChange={onChangeHandler} name='street' value={formData.street}
          className={inputClass} type='text' placeholder='Street' />

        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={formData.city}
            className={inputClass} type='text' placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={formData.state}
            className={inputClass} type='text' placeholder='State' />
        </div>

        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode}
            className={inputClass} type='text' placeholder='Zip code' />
          <input required onChange={onChangeHandler} name='country' value={formData.country}
            className={inputClass} type='text' placeholder='Country' />
        </div>

        <input required onChange={onChangeHandler} name='phone' value={formData.phone}
          className={inputClass} type='tel' placeholder='Phone no' />
      </div>

      {/* ------------------- right side ------------------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-60'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          {/* ----------- payment method ----------- */}
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-3 mx-4' src={assets.stripe_logo} alt='Stripe' />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-3 mx-4' src={assets.razorpay_logo} alt='Razorpay' />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>Cash On Delivery</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit' className='px-16 py-3 cursor-pointer bg-black text-white'>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder