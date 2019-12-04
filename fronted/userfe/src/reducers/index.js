import { combineReducers } from 'redux';

import login from './login';
import alert from './alert';
import register from './register';
import profile from './profile';

const myReducer = combineReducers({
    login,
    register,
    alert,
    profile
});

export default myReducer;