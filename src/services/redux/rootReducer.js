import { combineReducers } from 'redux';

import userReducer from '../user/redux/userReducer';
import cartReducer from '../cart/redux/cartReducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});