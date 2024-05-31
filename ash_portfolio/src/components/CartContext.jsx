// src/components/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.name === product.name);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setMessage('Item added to cart');
    setTimeout(() => setMessage(''), 3000);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.name !== product.name);
    });
  };

  const updateQuantity = (product, quantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.name === product.name ? { ...item, quantity: quantity } : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, message }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
