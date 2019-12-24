import {DELETE_CONTRACT, EDIT_CONTRACT, GET_CONTRACT_LIST} from "../constants/apis";
import * as types from "../constants/actionTypes";

const axios = require('axios').default.create({
    baseURL: BASE_URL,
    timeout: 1000,
});

export function setContractList(_payload) {
    return {
        type: types.SET_CONTRACT_LIST,
        payload: {
            datas: _payload.datas,
            pagination: _payload.pagination
        }
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
        payload: {
            datas: _payload.datas
        }
    }
}

export function getContractList(_payload) {
    return dispatch => {
        return axios.get(`${GET_CONTRACT_LIST}/${_payload.page}/${_payload.limit}`)
            .then(res => {
                const _resData = res.data.dt;

                let _payload = {
                    ...{},
                    ...{
                        datas: _resData.docs,
                        pagination: {
                            page: _payload.page,
                            limit: _payload.limit,
                            totalPages: _resData.totalDocs
                        }
                    }
                };
                dispatch(setContractList(_payload));
            })
    };
}

export function editContract(payload) {
    const url = EDIT_CONTRACT;
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
                dispatch(setEditContract(_resData));
            })
    }
}

export function deleteContract(payload) {
    const url = DELETE_CONTRACT;
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
                dispatch(setDeleteContract(_resData));
            })
    }
}
