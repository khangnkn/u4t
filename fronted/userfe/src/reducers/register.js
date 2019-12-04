import * as types from '../constants/ActionTypes'

var initialState = {
    user: {
        username: '',
        password: '',
        role: ''
    },
    confirmPassword: '',
    confirmFlat: true,
    isValid: false,
    requestRegister: false
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HANDLE_REGISTER_CHANGE:
            switch (action.name) {
                case 'username':
                    
                    var username = action.value;
                    var isValid1 = username !== '' && state.confirmFlat && state.user.password !== '' && state.confirmPassword !== '' ? true : false;
                    var user1 = state.user;
                    user1.username = username;
                    return { ...state, user: user1, isValid: isValid1 };
                case 'password':
                    var password = action.value;
                    var confirmFlat2 = state.confirmPassword === password ? true : false;
                    var isValid2 = state.user.username !== '' && state.confirmFlat ? true : false;
                    var user2 = state.user;
                    user2.password = password;
                    return { ...state, user: user2, isValid: isValid2, confirmFlat: confirmFlat2 };
                case 'confirmPassword':
                        console.log(state);
                    var confirmPassword = action.value;
                    var confirmFlat3 = state.user.password !== '' && state.user.password === confirmPassword ? true : false;
                    var isValid3 = state.user.username !== '' && confirmFlat3 ? true : false;
                    return { ...state, confirmPassword, confirmFlat: confirmFlat3, isValid: isValid3 };
                case 'role':
                    var user4 = state.user;
                    user4.role = action.value;
                    return {...state,user: user4};
                default:
                    return state;
            }
        case types.REGISTER_REQUEST:
            return { ...state, requestRegister: true };
        case types.REGISTER_SUCCESS:
            return { ...state, requestRegister: false };
        case types.REGISTER_FAILURE:
            return { ...state, requestRegister: false };
        default:
            return state;
    }
}

export default myReducer;