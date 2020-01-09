import {combineReducers} from 'redux'

import authentication from "./authentication.reducer";
import user from './user.reducers'
import skill from './skill.reducers'
import contract from './contract.reducers'
import complain from './complain.reducers'
import revenue from  './revenue.reducers'

export default combineReducers({
    authentication,
    user,
    skill,
    contract,
    complain,
    revenue
})
