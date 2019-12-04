import { combineReducers } from 'redux';

import login from './login';
import alert from './alert';
import register from './register';

const myReducer = combineReducers({
    login,
    register,
    alert
});

export default myReducer;