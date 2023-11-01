import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';

const ProductDetails = () => {
  const params = useParams()
  const { products } = React.useContext(ProductContext)
  const {addToCart} = React.useContext(CartContext)
  const product = products.find(item => item.id === +params.id)


  return <div className='bg-white min-h-screen overflow-hidden flex items-center justify-center'>
    <div className='container flex flex-col lg:flex-row items-center justify-center gap-5 my-[72px] lg:my-0'>
    <div className='p-5 bg-white border-[1px]border-gray-200'>
      <img className='max-w-full max-h-[600px] h-full' src={product.image} title={product.title} alt={product.title} />
    </div>
    <div className='p-5 bg-white max-w-[600px] flex flex-col items-start justify-center'>
      <h2 className='capitalize text-[28px] font-bold text-gray-900'>{product.title}</h2>
      <p className='capitalize text-[20px] font-normal text-green-600'>$ {product.price}</p>
      <p className='text-[14px] font-normal text-gray-600 my-3'>{product.description}</p>
    <button className='py-3 px-5 bg-gray-900 hover:bg-gray-700 duration-300 text-[14px] font-normal text-white ' onClick={() => addToCart(product, product.id)} >Add to cart</button>
    </div>
   </div>
    
    </div>;
};

export default ProductDetails;
