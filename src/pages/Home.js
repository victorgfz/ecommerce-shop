import React from 'react';

import Hero from '../components/Hero'

import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Head from '../components/Head';


const Home = () => {
  const { products } = React.useContext(ProductContext)
  const filteredProducts = products.filter(item => item.category === "men's clothing" || item.category === "women's clothing" ? item : null)
  return <div>
    <Head />
    <Hero />
    <div className='container mx-auto py-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
    {filteredProducts.map((item) => {
      return <Product product={item} key={item.id} />
    })}
    </div>
   
    
  </div>;
};

export default Home;
