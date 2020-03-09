import {cartTypeAction} from './cart.type';

export const setCartToogle = () => ({
    type: cartTypeAction.TOOGLE_CART_DROPDOWN
})

export const addItems = (item) => ({
    type: cartTypeAction.ADD_ITEMS,
    payload: item
})