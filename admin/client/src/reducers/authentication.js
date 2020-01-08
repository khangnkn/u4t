import * as types from '../constants/actionTypes';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {},
    role: 2
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        default:
            return state;
    }
}
