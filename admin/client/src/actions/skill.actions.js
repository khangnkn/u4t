import {ADD_SKILL, BASE_URL, DELETE_SKILL, EDIT_SKILL, GET_SKILL_LIST} from "../constants/apis";
import * as types from "../constants/actionTypes";

const {errorResponse, successResponse} = require('../utils/responseFormat');

const axios = require('axios').default.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

export function setSkillList(_payload) {
    return {
        type: types.SET_SKILL_LIST,
        payload: {
            datas: _payload.datas,
            pagination: _payload.pagination
        }
    }
}

export function setNewSkill(_payload) {
    return {
        type: types.ADD_SKILL,
        payload: {
            data: _payload.data
        }
    }
}

export function setEditSkill(_payload) {
    return {
        type: types.EDIT_SKILL,
        payload: _payload
    }
}

export function setDeleteSkill(_payload) {
    return {
        type: types.DELETE_SKILL,
        payload: {
            data: _payload.data
        }
    }
}

export function getSkillList(_payload) {
    return async dispatch => {
        try {
            const res = await axios.get(`${GET_SKILL_LIST}/${_payload.page}/${_payload.limit}`);
            const _resData = res.data.dt;
            let payload = {
                ...{},
                ...{
                    datas: _resData.docs,
                    pagination: {
                        page: _payload.page,
                        limit: _payload.limit,
                        totalPages: _resData.totalPages
                    }
                }
            };
            dispatch(setSkillList(payload));
            return successResponse(res);
        }
        catch (e) {
            return errorResponse(e)
        }
    };
}

export function addSkill(payload) {
    const url = ADD_SKILL;
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
            dispatch(setNewSkill(_resData));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    }
}

export function editSkill(payload) {
    const url = `${EDIT_SKILL}/${payload.id}`;
    const data = {
        ...{},
        ...{name: payload.name}
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
            dispatch(setEditSkill(_resData));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    }
}

export function deleteSkill(payload) {
    const url = DELETE_SKILL;
    const data = {
        ...{},
        ...payload
    };
    return dispatch => {
        try {
            const res = axios.put(url, data);
            const _resData = {
                ...{},
                ...{
                    data: res.data.dt
                }
            };
            dispatch(setDeleteSkill(_resData));
            return successResponse(res);
        } catch (e) {
            return errorResponse(e)
        }
    }
}
