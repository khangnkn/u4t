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

export const update = (user) => {
    return dispatch => {
        dispatch(request());
        try {
            userService.update(user).then(
                data => {
                    if (data.code === 1) {
                        dispatch(success(data.data.user));
                        dispatch(alertActions.success(data.message));
                    } else {
                        dispatch(failure(data.message));
                        dispatch(alertActions.error(data.message));
                    }
                }
            )
        } catch (ex) {
            console.log("looix ne");
        }
    }

    function request() {return {type: types.PROFILE_REQUEST}};
    function success(user) {return {type: types.PROFILE_SUCCESS,user}};
    function failure(error) {return {type: types.PROFILE_FAILURE,error}}; 
}

export const handleProfileInforChange = (name,value)=>{
    return{
        type:types.HANDLE_PROFILE_INFOR_CHANGE,
        name,
        value
    }
}

export const handleProfiledDataChange = (name,value)=>{
    return{
        type:types.HANDLE_PROFILE_DATA_CHANGE,
        name,
        value
    }
}

export const handleProfileAvatarChange = (imgFile) => {
    return {
        type: types.HANDLE_PROFILE_AVATAR_CHANGE,
        imgFile
    }
}

export const handleProfileStepChange = (step) => {
    return {
        type: types.HANDLE_PROFILE_STEP_CHANGE,
        step
    }
}

export const handleProfileStepBack = () => {
    return {
        type: types.HANDLE_PROFILE_STEP_BACK
    }
}

export const handleProfileStepNext = () => {
    return {
        type: types.HANDLE_PROFILE_STEP_NEXT
    }
}