import {LOG_IN_ERROR, LOG_IN_SUCCESS, SET_CURRENT_USER} from "../constants/actionTypes";
import isEmpty from 'lodash/isEmpty'

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        case LOG_IN_SUCCESS:
            return {
                isAuthenticated: true,
                user: action.user
            };
        case LOG_IN_ERROR:
            return {
                isAuthenticated: false,
                errors: action.errors
            };
        default:
            return state
    }
}


