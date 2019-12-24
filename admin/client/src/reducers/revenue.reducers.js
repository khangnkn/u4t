import * as types from '../constants/actionTypes';

const initialState = {
    datasChart: {},
    datasTopUser: {},
    datasTopSkill: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SET_SKILL_LIST:
            return {
            };
        default:
            return state
    }
}
