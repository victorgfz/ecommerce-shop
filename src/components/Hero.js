import React from 'react';


const Hero = () => {
  return (<div className='bg-hero bg-no-repeat bg-center bg-cover h-[800px] rounded-b-[50px] md:rounded-b-[100px]' >
    <div className='container mx-auto flex flex-col items-center justify-center gap-[6px] lg:gap-[10px] h-full'>
      <h1 className='font-secondary uppercase font-bold text-white text-[45px] sm:text-[60px] lg:text-[75px]
   leading-[40px] sm:leading-[50px] lg:leading-[65px] text-center '>we can't <br/> stop running</h1>
      <p className='font-extralight italic text-white text-[16px] lg:text-[20px] text-center'>Winter 24' Collection is now available</p>    
      <a href='./' className='font-extralight text-white text-[16px] lg:text-[20px] text-center relative after:bg-white after:h-[1px] after:w-full after:hover:w-0 after:absolute after:bottom-[0] after:left-0 hover:opacity-70 duration-300 after:duration-300'>Discover More</a>      
    </div>
  </div>);
};

export default Hero;
