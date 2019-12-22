import * as types from '../constants/actionTypes';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    datas: [],
    detail: {},
    // Type: student, teacher, admin
    role: '0',
    paginationStudent: {
        page: 1,
        totalPages: 1,
        limit: 2,
    },
    paginationTeacher: {
        page: 1,
        totalPages: 1,
        limit: 2,
    },
    paginationAdmin: {
        page: 1,
        totalPages: 1,
        limit: 2,
    },
    paginationRoot: {
        page: 1,
        totalPages: 1,
        limit: 2,
    }
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_STUDENT_LIST:
            return {
                datas: action.datas,
                role: action.role,
                detail: {},
                paginationStudent: action.paginationStudent
            };
        case types.SET_TEACHER_LIST:
            return {
                datas: action.datas,
                role: action.role,
                detail: {},
                paginationTeacher: action.paginationTeacher

            };
        case types.SET_ADMIN_LIST:
            return {
                datas: action.datas,
                role: action.role,
                detail: {},
                paginationAdmin: action.paginationAdmin
            };
        case types.SET_ROOT_LIST:
            return {
                datas: action.datas,
                role: action.role,
                detail: {},
                paginationRoot: action.paginationRoot

            };
        case types.SET_DETAIL_ACCOUNT:
            return {
                ...state, ...{detail: action.payload}
            };
        case types.SET_LOCK_ACCOUNT:
            let datas = state.datas.map(item =>
                (item._id === action.payload._id)
                    ? {...{}, ...action.payload}
                    : item
            );
            return {...state, ...{datas: datas}};
        default:
            return state
    }
}