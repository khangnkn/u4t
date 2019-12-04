import * as types from './../constants/ActionTypes';

import { userService } from './UserService';
import {alertActions} from './alert';
import {history} from '../helpers/HistoryHelper';


export const handleLoginChange = (name, value) => {
    return {
        type: types.HANDLE_LOGIN_CHANGE,
        name,
        value
    }
}

export const login = (username, password) => {
    return dispatch => {
        dispatch(request({username}));
        userService.login(username,password).then(
            data => {
                if (data.code === 1){
                    dispatch(success(data.user));
                    history.push('/profile');
                } else {
                    dispatch(failure(data.message));
                    dispatch(alertActions.error(data.message));
                }
            }
        )
    }
    function request(user) {return {type: types.LOGIN_REQUEST,user}};
    function success(user) {return {type: types.LOGIN_SUCCESS,user}};
    function failure(error) {return {type: types.LOGIN_FAILURE,error}};
}

export const handleRegisterChange = (name,value)=>{
    return{
        type:types.HANDLE_REGISTER_CHANGE,
        name,
        value
    }
}

export const register = (user) => {
    return dispatch => {
        dispatch(request());
        userService.register(user).then(
            data => {
                if (data.code === 1){
                    dispatch(success(data.user));
                    history.push('/login');
                } else {
                    dispatch(failure(data.message));
                    dispatch(alertActions.error(data.message));
                }
            } 
        );
    }
    function request(user) {return {type: types.REGISTER_REQUEST,user}};
    function success(user) {return {type: types.REGISTER_SUCCESS,user}};
    function failure(error) {return {type: types.REGISTER_FAILURE,error}};
}


export const handleProfileChange = (name,value)=>{
    return{
        type:types.HANDLE_PROFILE_CHANGE,
        name,
        value
    }
}

export const update = (user) => {
    return{
        type:types.HANDLE_UPDATE,
    }
}