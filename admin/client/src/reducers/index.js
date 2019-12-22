import {combineReducers} from 'redux'

import authentication from "./authentication";
import user from './user.reducers'

export default combineReducers({
    authentication,
    user
})
