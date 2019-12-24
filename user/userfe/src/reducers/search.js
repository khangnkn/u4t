import * as types from '../constants/ActionTypes';

const initialState = {
  keyword: '',
  city: '',
  skill: '',
  price: 0,
  result: null,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_SEARCH_DATA:
      var { value } = action;
      if (action.name === 'price') {
        value = parseInt(value);
      }
      state[action.name] = value;
      return { ...state };
    case types.HANDLE_SEARCH_RESULT:
      state.result = action.data;
      return state;
    default:
      return state;
  }
};
export default myReducer;
