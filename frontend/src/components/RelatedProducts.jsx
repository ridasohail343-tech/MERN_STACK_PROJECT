import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subcategory }) => {
    const [related, setRelated] = useState([]);
    const { products } = useContext(ShopContext);

    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter((item) => category === item.category);
            productCopy = productCopy.filter((item) => subcategory === item.subcategory);
            setRelated(productCopy.slice(0, 5));
        }
    }, [products, category, subcategory]);

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'REALTED'} text2={'PRODUCTS'}  />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-6 px-8 gap-4 gap-y-6'>
                {related.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                ))}
            </div>
        </div>
    );
}

export default RelatedProducts;