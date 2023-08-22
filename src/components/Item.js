import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const Item = ({ item }) => {
  const { addItem } = useContext(ShoppingCartContext);

  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price.toFixed(2)}</p>
      <button onClick={() => addItem(item)}>Add to Cart</button>
    </div>
  );
};

export default Item;
