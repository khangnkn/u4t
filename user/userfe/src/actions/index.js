/* eslint-disable no-sequences */
// import { dispatch } from 'rxjs/internal/observable/pairs';
import * as types from '../constants/ActionTypes';

import userService from './UserService';
import { alertActions } from './alert';
import history from '../helpers/HistoryHelper';
import { helperService } from './HelperService';


export const handleLoginChange = (name, value) => ({
  type: types.HANDLE_LOGIN_CHANGE,
  name,
  value,
});

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(request({ username }));
    userService.login(username, password).then(
      (data) => {
        if (data.code === 1) {
          dispatch(success(data.data));
          history.push('/home');
        } else {
          dispatch(failure(data.message));
          dispatch(alertActions.error(data.message));
        }
      },
    );
  };
  function request(user) { return { type: types.LOGIN_REQUEST, user }; }
  function success(user) { return { type: types.LOGIN_SUCCESS, user }; }
  function failure(error) { return { type: types.LOGIN_FAILURE, error }; }
};

export const handleRegisterChange = (name, value) => ({
  type: types.HANDLE_REGISTER_CHANGE,
  name,
  value,
});

export const register = (user) => {
  return (dispatch) => {
    dispatch(request());
    userService.register(user).then(
      (data) => {
        if (data.code === 1) {
          dispatch(success(data.user));
          history.push('/login');
        } else {
          dispatch(failure(data.message));
          dispatch(alertActions.error(data.message));
        }
      },
    );
  };
  function request(user) { return { type: types.REGISTER_REQUEST, user }; }
  function success(user) { return { type: types.REGISTER_SUCCESS, user }; }
  function failure(error) { return { type: types.REGISTER_FAILURE, error }; }
};

export const update = (user) => {
  return (dispatch) => {
    dispatch(request());
    try {
      userService.update(user).then(
        (data) => {
          if (data.code === 1) {
            dispatch(success(data.data.user));
            dispatch(alertActions.success(data.message));
          } else {
            dispatch(failure(data.message));
            dispatch(alertActions.error(data.message));
          }
        },
      );
    } catch (ex) {
      console.log(ex);
    }
  };

  function request() { return { type: types.PROFILE_REQUEST }; }
  function success(user) { return { type: types.PROFILE_SUCCESS, user }; }
  function failure(error) { return { type: types.PROFILE_FAILURE, error }; }
};

export const handleProfileInforChange = (name, value) => ({
  type: types.HANDLE_PROFILE_INFOR_CHANGE,
  name,
  value,
});

export const handleProfiledDataChange = (name, value) => ({
  type: types.HANDLE_PROFILE_DATA_CHANGE,
  name,
  value,
});

export const handleProfileSkillChange = (name, value, checked) => ({
  type: types.HANDLE_PROFILE_SKILLS_CHANGE,
  name,
  value,
  checked,
});

export const handleProfileAvatarChange = (imgFile) => ({
  type: types.HANDLE_PROFILE_AVATAR_CHANGE,
  imgFile,
});

export const handleProfileStepChange = (step) => ({
  type: types.HANDLE_PROFILE_STEP_CHANGE,
  step,
});

export const handleProfileStepBack = () => ({
  type: types.HANDLE_PROFILE_STEP_BACK,
});

export const handleProfileStepNext = () => ({
  type: types.HANDLE_PROFILE_STEP_NEXT,
});

export const handleCreateContractDataChange = (name, value) => ({
  type: types.HANDLE_CREATE_CONTRACT_DATA_CHANGE,
  name,
  value,
});
export const handleCreateContractSkillChange = (name, value, checked) => ({
  type: types.HANDLE_CREATE_CONTRACT_SKILL_CHANGE,
  name,
  value,
  checked,
});
export const handleCreateContractDateStartChange = (date) => ({
  type: types.HANDLE_CREATE_CONTRACT_DATE_START_CHANGE,
  date,
});

export const handleCreateContractDateEndChange = (date) => ({
  type: types.HANDLE_CREATE_CONTRACT_DATE_END_CHANGE,
  date,
});

export const handleCreateContractSetIdUser = (idSt, idTutor,data) => ({
  type: types.HANDLE_CREATE_CONTRACT_SET_ID_USER,
  idSt,
  idTutor,
  data
});
export const handleCreateContractSubmit = (contract) => {
  return (dispatch) => {
    dispatch(request());
    try {
      userService.createContract(contract).then(
        (data) => {
          if (data.code === 1) {
            // dispatch(success(data.message));
            dispatch(alertActions.success(data.message));
          } else {
            // dispatch(failure(data.message));
            dispatch(alertActions.error(data.message));
          }
        },
      );
    } catch (ex) {
      console.log('looix ne');
    }
  };

  function request() { return { type: types.CREATE_CONTRACT_REQUEST }; }
  function success(message) { return { type: types.CREATE_CONTRACT_SUCCESS, message }; }
  function failure(error) { return { type: types.CREATE_CONTRACT_FAILURE, error }; }
};

export const handleReloadChatRoom = (room) => ({
  type: types.HANDLE_RELOAD_CHAT_ROOM,
  room,
});
export const handleMessageChatRoom = (mess) => ({
  type: types.HANDLE_MESSAGE_CHAT_ROOM,
  mess,
});

export const handleControllerSelectContractManagement = (value) => ({
  type: types.HANDLE_CONTROLLER_SELECT_CONTRACT_MANAGEMENT,
  value,
});
export const handleLoadListContractManagement = (data) => ({
  type: types.HANDLE_LOAD_LIST_CONTRACT_MANAGEMENT,
  data,
});

export const handleSearchData = (name, value) => ({
  type: types.HANDLE_SEARCH_DATA,
  name,
  value,
});
export const handleSearch = (name, skill, city, price) => {
  const success = (list) => ({ type: types.HANDLE_SEARCH_RESULT, list });
  return (dispatch) => {
    var data={};
    if (name) data.name=name;
    if (skill) data.skill = skill;
    if (city) data.city = city;
    if (price) data.price = price;
    console.log(data);
    helperService.search(data).then((data) => {
      if (data.code === 1) {
        
        dispatch(success(data.data));
      }
    });
  };
};

export const handlePageChange = (page)=>{
  return {
    type: types.HANDLE_CHANGE_PAGE_SEARCH,
    page
  }
}
export const handleComplainDataChange = (name, value) => ({
  type: types.HANDLE_COMPLAIN_DATA_CHANGE,
  name,
  value,
});

export const handleReviewDataChange = (name, value) => ({
  type: types.HANDLE_REVIEW_DATA_CHANGE,
  name,
  value,
});

export const handleReviewContractSubmit = (_id, review) => (dispatch) => {
  try {
    userService.submitReviewContract(_id, review).then((data) => {
      if (data.code === 1) {
        dispatch(alertActions.success(data.message));
      } else {
        dispatch(alertActions.error(data.message));
      }
    });
  } catch (ex) {
    console.log(ex);
  }
};

export const handleComplainContractSubmit = (_id, complain) => (dispatch) => {
  try {
    userService.submitComplainContract(_id, complain).then((data) => {
      if (data.code === 1) {
        dispatch(alertActions.success(data.message));
      } else {
        dispatch(alertActions.error(data.message));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleCompleteContractSubmit = (_id) => (dispatch) => {
  try {
    userService.submitCompleteContract(_id).then((data) => {
      if (data.code === 1) {
        window.alert(data.message);
      } else {
        window.alert(data.message);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleContractControllerSelect = (selected) => ({
  type: types.HANDLE_CONTRACT_CONTROLLER_SELECT,
  selected,
});
