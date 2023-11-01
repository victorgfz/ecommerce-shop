import React from 'react';
import { IoIosClose } from "react-icons/io"
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({product}) => {
  const { id, title, image, price, amount } = product
  const {increaseAmount, decreaseAmount, removeFromCart} = React.useContext(CartContext)
  
  return <div className='flex gap-5 p-2 border-[1px] border-gray-100'>
    <div className='py-3'>
      <Link to={`/product/${id}`}>
      <img className='max-w-[100px]' src={image} alt={title} title={title} />
      </Link>   
    </div>
    <div className='flex flex-col justify-center flex-1 gap-1'>
      <div className='flex items-start justify-between'>
        <Link to={`/product/${id}`} className='uppercase font-medium text-gray-900 hover:underline hover:underline-offset-2 text-[14px] max-w-[400px] w-full '>
        {title}
        </Link>
      <IoIosClose onClick={() => removeFromCart(id)} className='text-3xl text-gray-600 cursor-pointer hover:text-red-600 duration-300' />
      </div>
      <div className='flex items-center justify-start gap-2'>
        <div className='flex items-center border-[1px] border-gray-20' >
          <button onClick={() => decreaseAmount(id)} className='px-2 group'>
          <AiOutlineMinus className='group-hover:text-red-600 duration-300' />
          </button>
          
          <p className='px-2 text-[14px]'>{amount}</p>
          <button onClick={() => increaseAmount(id)} className='px-2 group'>
          <AiOutlinePlus className='group-hover:text-green-600 duration-300'/>
          </button>
         
        </div>
        <div className='flex justify-between items-center flex-1'>
        <p className='text-[14px] font-normal text-gray-400'>$ {price}</p>
        <p className='text-[14px] font-bold text-gray-900 '>$ {(price * amount).toFixed(2)}</p>
        </div>
        
      </div>
    </div>
    
  </div>;
};

export default CartItem;
