import {GET_REVENUE, GET_REVENUE_TOTAL, GET_TOP_SALE_SKILLS, GET_TOP_SALE_USERS} from "../constants/apis";
import * as types from "../constants/actionTypes";

const {errorResponse, successResponse} = require('../utils/responseFormat');

const axios = require('axios').default.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

export function setRevenueTotal(_payload) {
    return {
        type: types.SET_TOTAL_REVENUE,
        payload: {
            datasChart: _payload.datasChart
        }
    }
}

export function setTopUsersRevenue(_payload) {
    return {
        type: types.SET_TOP_USER_REVENUE,
        payload: {
            datasTopUser: _payload.datasTopUser
        }
    }
}

export function setTopSkillsRevenue(_payload) {
    return {
        type: types.SET_TOP_SKILL_REVENUE,
        payload: {
            datasTopSkill: _payload.datasTopSkill
        }
    }
}

export function getTotalRevenue(payload) {
    let url = `${GET_REVENUE_TOTAL}/${payload.range}`;
    return async dispatch => {
        try {
            const res = await axios.get(url);
            const _resData = res.data.dt;

            let payloadState = {
                ...{},
                ...{
                    datasChart: _resData
                }
            };
            dispatch(setRevenueTotal(payloadState));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    };
}

export function getTopUsersRevenue(payload) {
    let url = `${GET_TOP_SALE_USERS}/${payload.range}`;
    return async dispatch => {
        try {
            const res = await axios.get(url)
            const _resData = res.data.dt;

            let payloadState = {
                ...{},
                ...{
                    datasTopUser: _resData
                }
            };
            dispatch(setTopUsersRevenue(payloadState));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    };
}

export function getTopSkillsRevenue(payload) {
    let url = `${GET_TOP_SALE_SKILLS}/${payload.range}`
    return async dispatch => {
        try {
            const res = await axios.get(url);
            const _resData = res.data.dt;

            let payloadState = {
                ...{},
                ...{
                    datasTopSkill: _resData
                }
            };
            dispatch(setTopSkillsRevenue(payloadState));
            return successResponse(res)
        } catch (e) {
            return errorResponse(e)
        }
    };
}
