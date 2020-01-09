import {
    ADD_CONTRACT,
    BASE_URL,
    DELETE_CONTRACT,
    EDIT_CONTRACT,
    GET_CONTRACT_DETAIL,
    GET_CONTRACT_LIST
} from "../constants/apis";
import * as types from "../constants/actionTypes";

const {errorResponse, successResponse} = require('../utils/responseFormat');

const axios = require('axios').default.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

export function setNewContract(_payload) {
    return {
        type: types.ADD_CONTRACT,
        payload: _payload
    }
}

export function setDetailContract(_payload) {
    return {
        type: types.SET_DETAIL_CONTRACT,
        payload: _payload
    }
}

export function setContractList(_payload) {
    return {
        type: types.SET_CONTRACT_LIST,
        payload: _payload
    }
}

export function setEditContract(_payload) {
    return {
        type: types.EDIT_CONTRACT,
        payload: _payload
    }
}

export function setDeleteContract(_payload) {
    return {
        type: types.DELETE_CONTRACT,
        payload: _payload
    }
}

export function addContract(payload) {
    const url = ADD_CONTRACT;
    const data = {
        ...{},
        ...payload.data
    };
    return async dispatch => {
        try {
            const res = await axios.post(`${url}`, data);
            const _resData = {
                ...{},
                ...{
                    data: res.data.dt
                }
            };
            dispatch(setNewContract(_resData));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    }
}

export function getContractList(payload) {
    let url = `${GET_CONTRACT_LIST}/${payload.page}/${payload.limit}`;
    return async dispatch => {
        try {
            const res = await axios.get(url);
            const _resData = res.data.dt;
            let payloadState = {
                ...{},
                ...{
                    datas: _resData.docs,
                    pagination: {
                        page: payload.page,
                        limit: payload.limit,
                        totalPages: _resData.totalPages
                    }
                }
            };
            console.log(payloadState);
            dispatch(setContractList(payloadState));
            return successResponse(res);
        } catch (e) {
            return errorResponse(e)
        }
    };
}

export function getContractDetail(payload) {
    const url = `${GET_CONTRACT_DETAIL}/${payload.id}`;
    const data = {
        ...{},
        ...payload.data
    };
    return async dispatch => {
        try {
            const res = await axios.get(url, data);
            const _resData = {
                ...{},
                ...{
                    data: res.data.dt
                }
            };
            dispatch(setDetailContract(_resData));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    }
}

export function editContract(payload) {
    const url = `${EDIT_CONTRACT}/${payload.id}`;
    const data = {
        ...{},
        ...payload.data
    };
    return async dispatch => {
        try {
            const res = await axios.put(url, data);
            const _resData = {
                ...{},
                ...{
                    data: res.data.dt
                }
            };
            dispatch(setEditContract(_resData));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    }
}

export function deleteContract(payload) {
    const url = `${DELETE_CONTRACT}/${payload.id}`;
    return async dispatch => {
        try {
            const res = await axios.delete(url);
            const _resData = {
                ...{},
                ...{
                    data: res.data.dt
                }
            };
            dispatch(setDeleteContract(_resData));
            return successResponse(res);
        } catch (e) {
            return errorResponse(e)
        }
    }
}
