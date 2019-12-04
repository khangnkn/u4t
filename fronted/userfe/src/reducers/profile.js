import * as types from '../constants/ActionTypes'

var initialState = {
    userInfor: {
        fullName: '',
        address: '',
        contactEmail: ''
    },
    data: {

    },
    requestUpdate: false
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default myReducer;