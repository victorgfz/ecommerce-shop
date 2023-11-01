import React from 'react';

export const ProductContext = React.createContext()


const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
