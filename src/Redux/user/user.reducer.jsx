import {userActionType} from './user.type'; //export  default don't need bracket for export function need bracket
const  INITIAL_STATE = {
    currentState : null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentState: action.payload
            }
        default:
            return state;
    }
}
export default userReducer;