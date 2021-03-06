import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)
export const selectHidden = createSelector(
    [selectCart],
    (cart)=> cart.hidden
)
export const selectCartItemsQuantity = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((initialCount,item) => initialCount += item.quantity,0)
)