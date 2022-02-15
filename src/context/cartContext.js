import React, { createContext, useState } from "react"

const defaultState = {
  id: null,
  name: "No name",
}

export const CartContext = createContext(defaultState)

const CartContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState([])

  const handleCart = () => {
    setShowCart(prev => !prev)
  }

  const addToCart = item => {
    const index = cart.findIndex(i => i.name === item.name)
    if (index === -1) {
      setCart(prev => [...prev, item])
    }
  }

  const removeFromCart = index => {
    const newCart = cart.filter((item, i) => i !== index)
    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{ cart, showCart, handleCart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext

export { CartContextProvider }
