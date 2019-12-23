import * as types from '../constants/actionTypes';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    datas: [],
    pagination: {},
    detail: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_CONTRACT_LIST:
            return{
                datas: action.datas,
                pagination: action.pagination
            }
        default:
            return state
    }
}
