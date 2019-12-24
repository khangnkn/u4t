import * as types from '../constants/ActionTypes'

var initialState = {
    selected: -1,
    list: []
}

var myReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.HANDLE_CONTROLLER_SELECT_CONTRACT_MANAGEMENT:
            return {...state,selected: action.value}
        case types.HANDLE_LOAD_LIST_CONTRACT_MANAGEMENT:
            return {...state,list: action.data};
        default:
            return state;
    }
}