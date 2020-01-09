import * as types from '../constants/actionTypes';

const initialState = {
    datasChart: {},
    datasTopUser: {},
    datasTopSkill: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_ALL_REVENUE:
            return {
                datasChart: action.datasChart,
                datasTopUser: action.datasTopUser,
                datasTopSkill: action.datasTopSkill
            };
        case types.SET_TOTAL_REVENUE:
            return {
                ...state,
                ...{
                    datasChart: action.datasChart,
                }
            };
        case types.SET_TOP_USER_REVENUE:
            return {
                ...state,
                ...{
                    datasTopUser: action.datasTopUser,
                }
            };
        case types.SET_TOP_SKILL_REVENUE:
            return {
                ...state,
                ...{
                    datasTopSkill: action.datasTopSkill,
                }
            };
        default:
            return state
    }
}
