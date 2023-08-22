import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const ShoppingCartItem = ({ item }) => {
  const { removeItem } = useContext(ShoppingCartContext);

  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>${item.price}</span>
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
};

export default ShoppingCartItem;
