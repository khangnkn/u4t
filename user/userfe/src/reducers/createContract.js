import * as types from '../constants/ActionTypes';

const initialState = {
  tutorInfor: {
    user: {
      data: {
        skills: [
        ],
        title: '',
        price: 0,
        level: {
          _id: '',
          name: '',
        },
      },
      avatar: '',
      city: {
        _id: '',
        name: '',
      },
      fullname: '',
      address: '',
    },
    contacts: [],
  },
  contract: {
    tutor: '',
    learner: '',
    title: '',
    description: '',
    price: 0,
    total: 0,
    hpw: 0,
    start_date: null,
    end_date: null,
    skill: null,
    // kyNang: []
  },
  requestCreate: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_CREATE_CONTRACT_SET_ID_USER:

      state.contract.learner = action.learner;
      state.contract.tutor = action.tutor;
      state.tutorInfor = action.data;
      return { ...state };
    case types.HANDLE_CREATE_CONTRACT_DATA_CHANGE:
      var { value } = action;
      if (action.name === 'limit' || action.name === 'price' || action.name === 'total') {
        value = parseFloat(value);
      }
      state.contract[action.name] = value;
      return { ...state };
    case types.HANDLE_CREATE_CONTRACT_SKILL_CHANGE:
      const skill = parseInt(action.value);
      if (action.checked) {
        state.contract.kyNang.push(skill);
        return { ...state };
      }
      var index = state.contract.kyNang.indexOf(skill);
      if (index !== -1) {
        state.contract.kyNang.splice(index, 1);
      }
      return { ...state };
    case types.HANDLE_CREATE_CONTRACT_DATE_START_CHANGE:
      state.contract.start_date = action.date;
      console.log(state);
      return { ...state };
    case types.HANDLE_CREATE_CONTRACT_DATE_END_CHANGE:
      state.contract.end_date = action.date;
      return { ...state };
    case types.CREATE_CONTRACT_REQUEST:
      return { ...state, requestCreate: true };
    case types.CREATE_CONTRACT_SUCCESS:
      return { ...state, requestCreate: false };
    case types.CREATE_CONTRACT_FAILURE:
      return { ...state, requestCreate: false };
    default:
      return state;
  }
};

export default myReducer;
