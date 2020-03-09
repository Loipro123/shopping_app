import {cartTypeAction} from './cart.type';
import {addItemtoList} from './cart.untils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartTypeAction.TOOGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartTypeAction.ADD_ITEMS:
            return {
                ...state,
                cartItems: addItemtoList(state.cartItems,action.payload)
            }
        default: return state;
    }
}

export default cartReducer;