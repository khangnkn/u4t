import axios from 'axios'
import jwtDecode from 'jwt-decode'

import setAuthorizationToken from "../utils/setAuthorizationToken";
import {LOG_IN} from "../constants/apis";
import * as types from "../constants/actionTypes";


export function setCurrentUser(user) {
    return {
        user,
        type: types.SET_CURRENT_USER
    };
}

export function login(data) {
    const _data = {
        ...{
            username: data.email,
            password: data.password
        }
    };
    return dispatch => {
        return axios.post(LOG_IN, _data).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwtDecode(token)));
        })
    };
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}
