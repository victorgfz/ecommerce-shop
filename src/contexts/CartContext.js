import React from 'react';

export const CartContext = React.createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([])
  const [itemsAmount, setItemsAmount] = React.useState(0)
  const [totalPrice, setTotalPrice] = React.useState(0)

  React.useEffect(() => {
    if (cart.length >= 1) {
      const quantity = cart.reduce((accumulator, item) => item.amount + accumulator, 0)
      setItemsAmount(quantity)
    } else {
      setItemsAmount(0)
    }

    if (cart.length >= 1) {
      const price = cart.reduce((accumulator, item) => item.price * item.amount + accumulator, 0)
      setTotalPrice(price)
    } else {
      setTotalPrice(0)
    }
    
  }, [cart])
  
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
    
    const itemCart = cart.find(item => {
      return item.id === id
    })
    if (itemCart) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return {...item, amount: itemCart.amount + 1}
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  
  }

  const removeFromCart = (id) => {
    const newCart = [...cart].filter(item => item.id !== id)
    setCart(newCart)
  }

  const increaseAmount = (id) => {
    const itemCart = cart.find(item => item.id === id)
    addToCart(itemCart, id)
  }

  const decreaseAmount = (id) => {
    const itemCart = cart.find(item => item.id === id)
    
    if (itemCart.amount > 1) {
      const newCart = [...cart].map(item => {
        if (item.id === id && item.amount > 1) {
          return {...item, amount: itemCart.amount - 1}
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      removeFromCart(id)
    }
    
  }

  return <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, increaseAmount, decreaseAmount, itemsAmount, totalPrice}}>{children}</CartContext.Provider>;
};

export default CartProvider;
