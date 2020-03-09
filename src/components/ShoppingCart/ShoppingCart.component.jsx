import React from 'react';
import  {connect} from 'react-redux';
import {ReactComponent as Cart} from '../../assets/shopping-cart.svg';
import {setCartToogle} from '../../Redux/cart/cart.action';
import {selectCartItemsQuantity} from '../../Redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import './ShoppingCart.styles.scss';

const ShoppingCart = ({setCartToogle, countItem}) => (
    <div className="cart-icon" onClick={setCartToogle}>
        <Cart className="shopping-icon"/>
        <span className="item-count">{countItem}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    setCartToogle: ()=> dispatch(setCartToogle())
})

const mapStateToProps = createStructuredSelector ({
    countItem: selectCartItemsQuantity
})
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);