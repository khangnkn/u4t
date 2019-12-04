import * as types from '../constants/ActionTypes';

var initialState = {
    username: '',
    password: '',
    requestLogin: false
}

var myReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {...state,requestLogin: true};
        case types.LOGIN_SUCCESS:
            return {...state,requestLogin:false};
        case types.LOGIN_FAILURE:
            return {...state,requestLogin:false};
        case types.HANDLE_LOGIN_CHANGE:
            
            return {...state,[action.name]: action.value};
        default:
            return state;
    }
}

export default myReducer;