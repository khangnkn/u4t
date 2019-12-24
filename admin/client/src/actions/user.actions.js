import {
    ADD_ADMIN,
    ADD_USER,
    BASE_URL,
    DELETE_ADMIN,
    DELETE_USER,
    EDIT_ADMIN,
    EDIT_USER,
    GET_USER_DETAIL,
    GET_USER_LIST,
    LOCK_USER,
    UNLOCK_USER
} from "../constants/apis";
import * as types from "../constants/actionTypes";

const axios = require('axios').default.create({
    baseURL: BASE_URL,
    timeout: 3000,
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
    return dispatch => {
        return axios.get(`${GET_USER_LIST}/${payload.role}/${payload.page}/${payload.limit}`)
            .then(res => {
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
            })
    };
}

export function getDetailUser(payload) {
    return dispatch => {
        return axios.get(`${GET_USER_DETAIL}/${payload.username}`)
            .then(res => {
                const _resData = res.data.dt;
                dispatch(setUserDetail(_resData));
            })
    }
}

export function addUser(payload) {
    const url = payload.admin ? ADD_ADMIN : ADD_USER;

    const data = {
        ...{},
        ...payload.data
    };
    return dispatch => {
        return axios.post(`${url}`, data)
            .then(res => {
                const _resData = {
                    ...{},
                    ...{
                        datas: res.data.dt.docs
                    }
                };
                dispatch(setNewUser(_resData));
            })
    }
}

export function editUser(payload) {
    const url = payload.admin ? EDIT_ADMIN : EDIT_USER;
    const data = {
        ...{},
        ...payload.data
    };
    return dispatch => {
        axios.put(url, data)
            .then(res => {
                const _resData = {
                    ...{},
                    ...{
                        data: res.data.dt
                    }
                };
                dispatch(setEditUser(_resData));
            })
    }
}

export function deleteUser(payload) {
    const url = payload.admin ? DELETE_ADMIN : DELETE_USER;
    const data = {
        ...{},
        ...payload.data
    };
    return dispatch => {
        axios.delete(url, data)
            .then(res => {
                const _resData = {
                    ...{},
                    ...{
                        data: res.data.dt
                    }
                };
                dispatch(setDeleteUser(_resData));
            })
    }
}

export function lockAccount(payload) {
    console.log(payload);
    return dispatch => {
        return axios.put(`${LOCK_USER}/${payload.username}`).then(res => {
                const _resData = res.data.dt;
                dispatch(setLockAccount(_resData));
            }
        )
    };
}

export function unlockAccount(payload) {
    return dispatch => {
        return axios.put(`${UNLOCK_USER}/${payload.username}`).then(res => {
                const _resData = res.data.dt;
                dispatch(setLockAccount(_resData));
            }
        )
    };
}

