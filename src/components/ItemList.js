import React from 'react';
import Item from './Item';
import items from '../data/items';

const ItemList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="item-list">
            <h2 className="text-center mb-4">Available Items</h2>
            <div className="row">
              {items.map(item => (
                <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                  <Item item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
