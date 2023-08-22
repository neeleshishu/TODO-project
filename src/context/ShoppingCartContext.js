import React, { createContext, useState, useContext } from 'react';

export const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = item => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = itemId => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addItem, removeItem, total }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
