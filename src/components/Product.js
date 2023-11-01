import React from 'react';
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';


const Product = ({product}) => {
  const { id, title, price, image, category } = product
  const {addToCart} = React.useContext(CartContext)

  return (<div className='overflow-hidden'>
    
    <div className='flex items-center justify-center w-full h-[300px] border-[1px] border-gray-200 group transition relative mb-2' >
      <img className='max-w-full max-h-[175px] group-hover:scale-110 duration-300' src={image} title={title} alt={title} />
      <div className='absolute top-0 right-0 md:-right-full group-hover:right-0 flex flex-col items-center justify-center gap-1 p-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300'>
      <button onClick={() => addToCart(product, id)} className='p-3 flex items-center justify-center rounded-full text-white  bg-green-600 hover:bg-green-400 duration-300 '>
        <BsPlus className='text-xl'/>
      </button>
      <Link className='p-3 flex items-center justify-center rounded-full text-gray-900 hover:text-gray-500 duration-300 bg-white border-[1px] border-gray-200  ' to={`/product/${id}`}>
        <BsEyeFill/>
      </Link>
    </div>
    </div>
      
    <p className='uppercase text-[12px] font-normal text-gray-600' >{category}</p>
    <Link to={`/product/${id}`}>
      <h3 className='capitalize text-[15px] font-bold text-gray-900'>{title}</h3>
    </Link>  
    <h3 className='capitalize text-[15px] font-normal text-gray-900'>$ {price}</h3>
  </div>);
};

export default Product;
