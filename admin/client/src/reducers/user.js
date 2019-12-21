import * as types from '../constants/actionTypes';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  datas: [],
  // Type: student, teacher, admin
  type: 0,
  page: 1,
  totalPages: 1,
  details : {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_STUDENT_LIST:
    case types.SET_TEACHER_LIST:
    case types.SET_ADMIN_LIST:
      return {
        datas: action.datas,
        type: action.type,
        page: action.page,
        totalPages: action.totalPages,
        details: {}
      }
    case types.SET_DETAIL_STUDENT:
    case types.SET_DETAIL_TEACHER:
    case types.SET_DETAIL_ADMIN:
      return {}
    default:
      return state
  }
}