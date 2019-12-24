import {GET_REVENUE, GET_REVENUE_TOTAL, GET_TOP_SALE_SKILLS, GET_TOP_SALE_USERS} from "../constants/apis";
import * as types from "../constants/actionTypes";

const axios = require('axios').default.create({
    baseURL: BASE_URL,
    timeout: 1000,
});

export function setAllRevenue(_payload) {
    return {
        type: types.SET_ALL_REVENUE,
        payload: _payload
    }
}

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


export function getAllRevenue(_payload) {
    return dispatch => {
        return axios.get(`${GET_REVENUE}`)
            .then(res => {
                const _resData = res.data.dt;

                let _payload = {
                    ...{},
                    ..._resData
                };
                dispatch(setAllRevenue(_payload));
            })
    };
}

export function getTotalRevenue(_payload) {
    return dispatch => {
        return axios.get(`${GET_REVENUE_TOTAL}`)
            .then(res => {
                const _resData = res.data.dt;

                let _payload = {
                    ...{},
                    ...{
                        datasChart: _resData
                    }
                };
                dispatch(setRevenueTotal(_payload));
            })
    };
}

export function getTopUsersRevenue(_payload) {
    return dispatch => {
        return axios.get(`${GET_TOP_SALE_USERS}`)
            .then(res => {
                const _resData = res.data.dt;

                let _payload = {
                    ...{},
                    ...{
                        datasTopUser: _resData
                    }
                };
                dispatch(setTopUsersRevenue(_payload));
            })
    };
}

export function getTopSkillsRevenue(_payload) {
    return dispatch => {
        return axios.get(`${GET_TOP_SALE_SKILLS}`)
            .then(res => {
                const _resData = res.data.dt;

                let _payload = {
                    ...{},
                    ...{
                        datasTopSkill: _resData
                    }
                };
                dispatch(setTopSkillsRevenue(_payload));
            })
    };
}
