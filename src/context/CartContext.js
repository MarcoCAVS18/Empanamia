import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  isInCart: () => {},
  editItemQuantity: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    // Calculate the total whenever the cart changes
    const updatedTotal = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(updatedTotal);
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

  const editItemQuantity = (itemId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        editItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
