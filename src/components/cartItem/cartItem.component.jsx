import React from 'react';
import './cartItem.styles.scss';

const CartItem = ({item: {name,price,imageUrl,quantity}}) => (
   <div className="cart-item">
       <img src={imageUrl} alt="item"></img>
       <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">${price} * {quantity}</span>
       </div>
   </div>
);

export default CartItem;
