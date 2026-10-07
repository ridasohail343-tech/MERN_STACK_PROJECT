import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Products = () => {
    const { productId } = useParams();
    const { products,currency,AddToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('')
    const [size, setsize] = useState('')

    const fetchProductData = () => {
        const product = products.find((item) => item._id === productId);
        if (product) {
            setProductData(product);
            setImage(product.image[0]);
        }
    }

    useEffect(() => {
        fetchProductData();
    }, [productId, products])

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            <div className='flex flex-col gap-12 sm:gap-10 sm:flex-row'>
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((item, index) => (
                                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 cursor-pointer' alt="" />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img src={image} className='w-full h-auto '  alt="" />
                    </div>
                </div>
                {/* ------------------product info----------------- */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2  text-bold' >{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt="" className="w-2.5" />
                        <img src={assets.star_icon} alt="" className="w-2.5" />
                        <img src={assets.star_icon} alt="" className="w-2.5" />
                        <img src={assets.star_icon} alt="" className="w-2.5" />
                        <img src={assets.star_dull_icon} alt="" className="w-2.5" />
                        <p className='pl-2'>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-400 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {
                                productData.sizes.map((item,index)=>(
                                    <button onClick={()=>setsize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size?'border-orange-500':''}`} key={index}>{item}</button>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={()=>AddToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                    <hr className='mt-8 sm:w-4/5'/>
                    <div className='text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% original product</p>
                        <p>cash on delivery on this product is avaliable</p>
                        <p>Easy return and exchange policy within this product</p>
                    </div>
                </div>
            </div>
            {/* ----------------------decription and reviews---------------------- */}
            <div className='mt-20'>
                <div className='flex gap-1'>
                    <b className='border px-5 py-3 text-sm'>Decription</b>
                    <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
                </div>
                 <div className='flex flex-col border py-6 px-6 text-sm text-gray-700'>We are a modern and customer-focused company dedicated to providing high-quality products and excellent service. Our goal is to make shopping simple, convenient, and enjoyable for our customers. We believe in quality, innovation, and customer satisfaction, and we continuously work to improve our products and services.</div>
                 </div>
                 {/* --------------------related products-------------- */}
                <RelatedProducts category={productData.category} subcategory={productData.subcategory}/>
            </div>

    ) : <div className='opacity-0'></div>
}

export default Products