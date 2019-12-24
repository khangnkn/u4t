import * as types from '../constants/actionTypes';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    datas: [],
    pagination: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_SKILL_LIST:
            return {
                datas: action.datas,
                pagination: action.pagination
            };
        case types.ADD_SKILL:
            return {
                datas: action.datas,
                pagination: action.pagination
            };
        case types.EDIT_SKILL:
            return {
                ...state,
                ...{
                    datas: state.datas.map((item) => (item._id === action.payload._id)
                            ? {...{}, ...action.payload}
                            : item)
                }
            };
        case types.DELETE_SKILL:
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
