import { combineReducers } from 'redux';

import login from './login';
import alert from './alert';
import register from './register';
import profile from './profile';
import createContract from './createContract';
import chat from './chat';

const myReducer = combineReducers({
    login,
    register,
    alert,
    profile,
    createContract,
    chat
});

export default myReducer;