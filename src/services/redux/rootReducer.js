import { combineReducers } from 'redux';

import userReducer from '../user/redux/userReducer';

export default combineReducers({
    user: userReducer
});