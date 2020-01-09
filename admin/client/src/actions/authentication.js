import axios from 'axios'
import jwtDecode from 'jwt-decode'

import setAuthorizationToken from "../utils/setAuthorizationToken";
import {LOG_IN} from "../constants/apis";
import * as types from "../constants/actionTypes";

const {errorResponse, successResponse} = require('../utils/responseFormat');

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
    return async dispatch => {
        try {
            const res = await axios.post(LOG_IN, _data)
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwtDecode(token)));
            return successResponse(successResponse())
        } catch (e) {
            return errorResponse(e)
        }
    };
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}
