import {
    ADD_ADMIN,
    ADD_USER,
    BASE_URL,
    DELETE_ADMIN,
    DELETE_USER,
    EDIT_ADMIN,
    EDIT_USER,
    GET_ADMIN_DETAIL,
    GET_ADMIN_LIST,
    GET_USER_DETAIL,
    GET_USER_LIST,
    LOCK_ADMIN,
    LOCK_USER,
    UNLOCK_ADMIN,
    UNLOCK_USER
} from "../constants/apis";
import * as types from "../constants/actionTypes";

const {errorResponse, successResponse} = require('../utils/responseFormat');


const axios = require('axios').default.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

export function setUserList(payload) {
    return {...payload}
}

export function setLockAccount(payload) {
    return {
        type: types.SET_LOCK_ACCOUNT,
        payload: payload
    }
}

export function setUserDetail(payload) {
    return {
        type: types.SET_DETAIL_ACCOUNT,
        payload: payload
    }

}

export function setNewUser(_payload) {
    console.log('setNewUser');
    console.log(_payload);
    return {
        type: types.ADD_USER,
        payload: {
            datas: _payload.datas
        }
    }
}

export function setEditUser(_payload) {
    return {
        type: types.EDIT_USER,
        payload: {
            datas: _payload.datas
        }
    }
}

export function setDeleteUser(_payload) {
    return {
        type: types.DELETE_USER,
        payload: {
            datas: _payload.datas
        }
    }
}

export function getUserList(payload) {
    const url = payload.admin ? GET_ADMIN_LIST : GET_USER_LIST;

    return async dispatch => {
        try {
            const res = await axios.get(`${url}/${payload.role}/${payload.page}/${payload.limit}`)
            const _resData = res.data.dt;
            let _payload = {
                datas: _resData.docs,
                details: {},
                role: payload.role
            };
            switch (payload.role) {
                case '0':
                    _payload = {
                        ..._payload,
                        ...{
                            paginationStudent: {
                                page: _resData.page,
                                totalPages: _resData.totalPages,
                                limit: _resData.limit,
                            },
                            type: types.SET_STUDENT_LIST
                        }
                    };
                    break;
                case '1':
                    _payload = {
                        ..._payload,
                        ...{
                            paginationTeacher: {
                                page: _resData.page,
                                totalPages: _resData.totalPages,
                                limit: _resData.limit,
                            },
                            type: types.SET_TEACHER_LIST
                        }
                    };
                    break;
                case '2':
                    _payload = {
                        ..._payload,
                        ...{
                            paginationAdmin: {
                                page: _resData.page,
                                totalPages: _resData.totalPages,
                                limit: _resData.limit,
                            },
                            type: types.SET_ADMIN_LIST
                        }
                    };
                    break;
                case '3':
                    _payload = {
                        ..._payload,
                        ...{
                            paginationRoot: {
                                page: _resData.page,
                                totalPages: _resData.totalPages,
                                limit: _resData.limit,
                            },
                            type: types.SET_ROOT_LIST
                        }
                    };
                    break;
                default:
                    return;
            }
            dispatch(setUserList(_payload));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    };
}

export function getDetailUser(payload) {
    const url = payload.admin ? GET_ADMIN_DETAIL : GET_USER_DETAIL;

    return dispatch => {
        try {
            const res = axios.get(`${url}/${payload.username}`);
            const _resData = res.data.dt;
            dispatch(setUserDetail(_resData));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    }
}

export function addUser(payload) {
    const url = payload.admin ? ADD_ADMIN : ADD_USER;

    const data = {
        ...{},
        ...payload.data
    };
    return async dispatch => {
        try {
            const res = await axios.post(`${url}`, data);
            console.log(res);
            const _resData = {
                ...{},
                ...{
                    datas: res.data.dt
                }
            };
            dispatch(setNewUser(_resData));
            return successResponse(res);
        } catch (e) {
            return errorResponse(e)
        }
    }
}

export function editUser(payload) {
    const url = payload.admin ? EDIT_ADMIN : EDIT_USER;
    const data = {
        ...{},
        ...payload.data
    };
    return async dispatch => {
        try {
            const res = await axios.put(url, data)
            const _resData = {
                ...{},
                ...{
                    data: res.data.dt
                }
            };
            dispatch(setEditUser(_resData));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    }
}

export function deleteUser(payload) {
    const url = payload.admin ? DELETE_ADMIN : DELETE_USER;
    const data = {
        ...{},
        ...payload.data
    };
    return async dispatch => {
        try {
            const res = await axios.delete(url, data)
            const _resData = {
                ...{},
                ...{
                    data: res.data.dt
                }
            };
            dispatch(setDeleteUser(_resData));
            return successResponse(res);
        } catch (e) {
            return errorResponse(e)
        }
    }
}

export function lockAccount(payload) {
    const url = payload.admin ? LOCK_ADMIN : LOCK_USER;
    return async dispatch => {
        try {
            const res = await axios.put(`${url}/${payload.id}`)
            const _resData = res.data.dt;
            dispatch(setLockAccount(_resData));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    }
}

export function unlockAccount(payload) {
    const url = payload.admin ? UNLOCK_ADMIN : UNLOCK_USER;

    return async dispatch => {
        try {
            const res = await axios.put(`${url}/${payload.username}`)
            const _resData = res.data.dt;
            dispatch(setLockAccount(_resData));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    }
}

