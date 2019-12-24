import * as types from '../constants/ActionTypes'
var initialState = {
    complain: '',
    review: {
        rating: 1,
        content: ''
    },
    selected: 0
}

var myReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.HANDLE_REVIEW_DATA_CHANGE:
            var value = actions.value;
            if (action.name === 'rating') value = parseInt(value);
            state.review[action.name] = value;
            return {...state}
        case types.HANDLE_COMPLAIN_DATA_CHANGE: 
            state.complain = action.value;
            return {...state};
        case types.HANDLE_CONTRACT_CONTROLLER_SELECT: 
            state.selected = action.selected;
            return {...state};
        default:
            return state;
    }
}
