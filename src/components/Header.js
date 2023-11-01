import React from 'react';
import { BsBag } from 'react-icons/bs'
import { CgAdidas } from "react-icons/cg";
import { SidebarContext } from '../contexts/SidebarContext';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
  const [isActive, setIsActive] = React.useState(false)
  const { isOpen, setIsOpen } = React.useContext(SidebarContext) 
  const {itemsAmount} = React.useContext(CartContext)
  React.useEffect(() => {
    const headerBackground = () => {
      return window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    }
    window.addEventListener('scroll', headerBackground)
    return () => {
      window.removeEventListener('scroll', headerBackground)
    }
  })

  return (<header className={`${isActive ? 'bg-white shadow-md' : 'bg-transparent'} duration-300 fixed w-full z-10 py-2`}>
    <div className='container mx-auto flex items-center justify-between'>
      <Link className='py-2 cursor-pointer' to='/'><CgAdidas className={`text-3xl text-gray-900`}/></Link>
    <div onClick={() => setIsOpen(!isOpen)} className='py-2 cursor-pointer relative'>
        <BsBag className={`text-3xl text-gray-900`} />
        {itemsAmount > 0 ?  <div className='bg-green-400 flex items-center justify-center rounded-full w-[24px] h-[24px] text-[14px] text-gray-900 absolute -bottom-[4px] -left-[8px] transition-all duration-300'>{itemsAmount}</div> : null}
       
    </div>
    </div>      
  </header>);
};

export default Header;
