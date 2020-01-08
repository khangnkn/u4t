import * as types from '../constants/ActionTypes';

const getIdUser = () => {
  try {
    const userCookie = JSON.parse(localStorage.getItem('user'));
    return {_id: userCookie.user._id,role: userCookie.user.role};
  } catch (ex) {
    return {_id: '',role: 0};
  }
};
const initialState = {
  message: '',
  me: getIdUser(),
  roomList: [
  ],
  story: {
    _id: 'afsaiop',
    created_at: '24:00 10/20/2019',
    tutor: {
      _id: '',
      username: ''
    },
    learner: {
      _id: '',
      username: ''
    },
    messages: [
    ],
  },
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_RELOAD_CHAT_ROOM:
      state.roomList = action.room;
      
      return { ...state };
    case types.HANDLE_RELOAD_STORY:
      state.story = action.story;
      console.log(state);
      return {...state};
    case types.HANDLE_MESSAGE_CONTENT:
      state.message = action.mess;
      return {...state};
    default:
      return state;
  }
};

export default myReducer;
