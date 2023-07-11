import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    const existingItem = cart.find((product) => product.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity + quantity };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((product) => product.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((product) => product.id === itemId);
  };

  const cartCount = cart.reduce((total, product) => total + product.quantity, 0);

  const editItemQuantity = (itemId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addItem, removeItem, clearCart, isInCart, editItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
