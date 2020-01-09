import * as types from '../constants/actionTypes';

const initialState = {
    datas: [],
    detail: {},
    // Type: student, teacher, admin
    role: '0',
    admin: false,
    paginationStudent: {
        page: 1,
        totalPages: 1,
        limit: 5,
    },
    paginationTeacher: {
        page: 1,
        totalPages: 1,
        limit: 5,
    },
    paginationAdmin: {
        page: 1,
        totalPages: 1,
        limit: 5,
    },
    paginationRoot: {
        page: 1,
        totalPages: 1,
        limit: 5,
    },
    pagination: {
        limit: 5
    }
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_STUDENT_LIST:
            return {
                ...state,
                ...{
                    datas: action.datas,
                    role: action.role,
                    detail: {},
                    admin: action.admin,
                    paginationStudent: action.paginationStudent
                }
            };
        case types.SET_TEACHER_LIST:
            return {
                ...state,
                ...{
                    datas: action.datas,
                    role: action.role,
                    detail: {},
                    admin: action.admin,
                    paginationTeacher: action.paginationTeacher
                }

            };
        case types.SET_ADMIN_LIST:
            return {
                ...state,
                ...{
                    datas: action.datas,
                    role: action.role,
                    detail: {},
                    admin: action.admin,
                    paginationAdmin: action.paginationAdmin
                }
            };
        case types.SET_ROOT_LIST:
            return {
                ...state,
                ...{
                    datas: action.datas,
                    role: action.role,
                    detail: {},
                    admin: action.admin,
                    paginationRoot: action.paginationRoot
                }
            };
        case types.SET_DETAIL_ACCOUNT:
            return {
                ...state,
                ...{detail: action.payload}
            };
        case types.SET_LOCK_ACCOUNT:
            let datas = state.datas.map(item =>
                (item._id === action.payload._id)
                    ? {...{}, ...action.payload}
                    : item
            );
            return {
                ...state,
                ...{datas: datas}
            };
        case types.ADD_USER:
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
        case types.EDIT_USER:
            return {
                ...state,
                ...{
                    datas: state.datas.map(item =>
                        (item._id === action.payload._id)
                            ? {...{}, ...action.payload}
                            : item
                    )
                }
            };
        case types.DELETE_USER:
            return {
                ...state,
                ...{
                    datas: action.payload.datas.filter((item) => {
                        return (item.deleted_at !== null)
                    })
                }
            };
        default:
            return state
    }
}
