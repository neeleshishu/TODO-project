import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = () => {
  const { cartItems, total } = useContext(ShoppingCartContext);

  return (
    <div className="container shopping-cart">
    <hr/>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
          <p>Total: ${total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
