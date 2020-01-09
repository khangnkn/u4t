import * as types from '../constants/actionTypes';

const initialState = {
    datas: [],
    pagination: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_SKILL_LIST:
            return {
                datas: action.payload.datas,
                pagination: action.payload.pagination
            };
        case types.ADD_SKILL:
            if (state.datas.length < state.pagination.limit) {
                return {
                    ...state,
                    ...{
                        datas: [
                            ...state.datas,
                            action.payload.data
                        ]
                    }
                };
            } else {
                if (state.pagination.page === state.pagination.totalPages) {
                    return {
                        ...state,
                        ...{
                            pagination: {
                                ...state.pagination,
                                ...{
                                    totalPages: state.pagination.totalPages + 1
                                }
                            }
                        }
                    }
                }
                return state
            }

        case types.EDIT_SKILL:
            return {
                ...state,
                ...{
                    datas: state.datas.map((item) => (item._id === action.payload.data._id)
                        ? {...{}, ...action.payload.data}
                        : item)
                }
            };
        case types.DELETE_SKILL:
            return {
                ...state,
                ...{
                    datas: state.datas.filter((item) => {
                        return (item._id !== action.payload.data._id)
                    })
                }
            };
        default:
            return state
    }
}
