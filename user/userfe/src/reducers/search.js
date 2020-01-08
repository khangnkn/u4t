import * as types from '../constants/ActionTypes';

const initialState = {
  keyword: '',
  city: '',
  skill: '',
  price: 0,
  result: [],
  page: 0,
  size: 4
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_SEARCH_DATA:
      // console.log(action);
      var { value } = action;
      if (action.name === 'price') {
        try {
          value = parseInt(value);
        } catch (ex){
          value = 0;
        }
      }
      
      state[action.name] = value;
      return { ...state };
    case types.HANDLE_SEARCH_RESULT:
      if (action.list){
        state.result = action.list;
      }
      return {...state};
    case types.HANDLE_CHANGE_PAGE_SEARCH:
      state.page = action.page;
      console.log(state);
      return {...state};
    default:
      return state;
  }
};
export default myReducer;
