import React from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import {BsArrowRight, BsTrashFill, BsCart} from "react-icons/bs"
import CartItem from '../components/CartItem';

const Sidebar = () => {
  const { isOpen, handleClose } = React.useContext(SidebarContext) 
  const {cart, setCart, itemsAmount, totalPrice} = React.useContext(CartContext)
  
  return (<div className={`fixed top-0 ${isOpen ? 'right-0' : '-right-full'} duration-300 ease-in-out h-full w-full md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 p-5 bg-white shadow-xl z-20 flex flex-col justify-between`}>
    <header className='flex items-center justify-between py-3 border-b-[1px] border-gray-200' >
      <h2 className='uppercase font-normal text-gray-900'>Shopping Bag ({itemsAmount})</h2>
      <BsArrowRight onClick={handleClose} className='text-3xl text-gray-900 cursor-pointer'/>
    </header>
    <div className='overflow-y-auto overflow-x-hidden my-5 h-full flex flex-col gap-2'>
      {cart.length > 0 ? cart.map((item) => <CartItem product={item} key={item.id} />) : <div className='w-full h-full flex flex-col items-center justify-center'><BsCart className='text-[64px] text-gray-900 mb-3'/><h2 className='uppercase font-bold text-[24px] text-center text-gray-900 leading-1'>The cart is empty</h2><p className='uppercase text-gray-600'>Maybe it's time to start shopping...</p></div>}
    </div>
    <footer className='flex items-center justify-between py-3 border-t-[1px] border-gray-200'>
      <h2 className='uppercase font-bold text-gray-900'>Total: <span className='font-normal'>${totalPrice.toFixed(2)}</span></h2>
      <div className='flex items-center gap-2'>
        <button disabled={cart.length > 0 ? false : true} className={`font-light text-[14px] text-white ${cart.length > 0 ? 'bg-gray-900 hover:bg-gray-700 duration-300' : 'bg-gray-400'}  py-3 px-5`}>
          Checkout
      </button>
      <button onClick={() => setCart([])} className='bg-red-600 hover:bg-red-400 duration-300 p-3'>
      <BsTrashFill className='text-xl text-white duration-300 cursor-pointer'/>
      </button>
      </div>
      
      
    </footer>
  </div>);
};

export default Sidebar;
