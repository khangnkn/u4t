import axios from 'axios'
import jwtDecode from 'jwt-decode'

import * as type from '../constants/actionTypes'

export const setCurrentUser = (user) => {
    return {
        type: type.SET_CURRENT_USER,
        user
    }
};

export const loginSuccess = (user) => {
    return {
        type: type.LOG_IN_SUCCESS,
        user
    }
};

export const loginError = (errors) => {
    return {
        type: type.LOG_IN_ERROR,
        errors
    }
};


export const login = (data) => {
    const _data = {
        ...{
            email: data.email,
            password: data.password
        }
    };
    return dispatch => {
        return axios.post('/api/auth', _data)
            .then(res => {
                const token = res.data.token;
                localStorage.setItem('jwtToken', token);
                dispatch(loginSuccess(jwtDecode(token)));
            })
            .catch(err => {
                console.log(err.data);
                dispatch(loginError(err.data));
            })
    }
};

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken')
        dispatch(setCurrentUser({}))
    }
};