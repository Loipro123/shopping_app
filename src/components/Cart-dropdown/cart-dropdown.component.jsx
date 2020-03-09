import React from 'react';
import './cart-dropdown.styles.scss';
import CustomBtn from '../Custom-Button/customBtn.component';
import {connect} from 'react-redux';
import CartItem from '../cartItem/cartItem.component';
import {selectCartItems} from '../../Redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
           {cartItems.map(cartItem=> (<CartItem key={cartItem.id} item={cartItem}/>))} 
           
        </div>
        <CustomBtn >CHECK OUT</CustomBtn>
    </div>
);

const mapStateToProps = createStructuredSelector({// give the root state for all function pass
    cartItems: selectCartItems
})
export default connect(mapStateToProps)(CartDropdown);