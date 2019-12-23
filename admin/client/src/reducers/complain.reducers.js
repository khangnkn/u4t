import * as types from '../constants/actionTypes';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    datas: [],
    pagination: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_COMPLAIN_LIST:
            return{
                datas: action.datas,
                pagination: action.pagination
            }
        default:
            return state
    }
}
