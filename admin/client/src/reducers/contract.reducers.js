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
            return {
                ...state,
                ...{
                    datas: action.datas,
                    pagination: action.pagination
                }
            };
        case types.SET_DETAIL_CONTRACT:
            return {
                ...state,
                ...{detail: action.payload}
            };
        case types.EDIT_CONTRACT:
            return {
                ...state,
                ...{
                    datas: state.datas.map((item) => (item._id === action.payload._id)
                        ? {...{}, ...action.payload}
                        : item)
                }
            };
        case types.DELETE_CONTRACT:
            return {
                ...state,
                ...{
                    datas: state.datas.filter((item) => {
                        return (item.deleted_at !== null)
                    })
                }
            };
        default:
            return state
    }
}
