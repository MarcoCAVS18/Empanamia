import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [], 
  addItem: () => {},
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
  
    const addItem = (item, quantity) => {
      if (!isInCart(item.id)) {
        setCart((prev) => [...prev, { ...item, quantity }]);
        setCartCount((prevCount) => prevCount + quantity);
      } else {
        console.error("El producto ya fue agregado");
      }
    };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((product) => product.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    setCartCount(0);
  };

  const isInCart = (itemId) => {
    return cart.some((product) => product.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
