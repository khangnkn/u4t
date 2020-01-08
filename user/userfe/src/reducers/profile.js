import * as types from '../constants/ActionTypes'
function loadAvatarPreviewUrl() {
    var userCookie = JSON.parse(localStorage.getItem('user'));
    return !userCookie ? "" : userCookie.user.avatar ? userCookie.user.avatar : "";
}

function loadId() {
    var userCookie = JSON.parse(localStorage.getItem('user'));
    return userCookie ? userCookie.user._id : "";
}

function loadUsername() {
    var userCookie = JSON.parse(localStorage.getItem('user'));
    return userCookie ? userCookie.user.username : "";
}

function loadUserInfor(){
    var userCookie = JSON.parse(localStorage.getItem('user'));
    // console.log(userCookie);
    if (userCookie === null) return null;
    return {
            fullname: userCookie.user.fullname ? userCookie.fullname : '',
            sex: userCookie.user.sex ? userCookie.user.sex : 0,
            email: userCookie.user.email ? userCookie.user.email : '',
            phone: userCookie.user.phone ? userCookie.user.phone : '',
            address: userCookie.user.address ? userCookie.user.address : '',
            city: userCookie.user.city ? userCookie.user.city : {_id: '',name: ''},
            role: userCookie.user.role ? userCookie.user.role : 0,
    }
}

function loadUserData() {
    var userCookie = JSON.parse(localStorage.getItem('user'));
    if (userCookie === null || userCookie.user.data === null) return {
        intro: '',
        title: '',
        price: 0,
        skills: [],
        levels: ''
    };
    return userCookie.user.data;
}

var initialState = {
    user: {
        id: loadId(),
        userName: loadUsername(),
        infor: loadUserInfor(),
        avatar: null,
        data: loadUserData()
    },
    step: 1,
    currStep: 1,
    avatarPreviewUrl: loadAvatarPreviewUrl(),
    requestUpdate: false
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HANDLE_PROFILE_INFOR_CHANGE:
            let name1 = action.name, value1 = action.value;
            if (name1 === "sex") value1 = parseInt(value1);
            let user1 = state.user;
            user1.infor[name1] = value1;
            return { ...state, user: user1 };
        case types.HANDLE_PROFILE_DATA_CHANGE:
            let name2 = action.name, value2 = action.value;
            if (name2 === 'price') 
            var user2 = state.user;
            user2.data[name2] = value2;
            return { ...state, user: user2 };
        case types.HANDLE_PROFILE_SKILLS_CHANGE:
            let skill = parseInt(action.value);
            let user4 = state.user;
            if (action.checked) {
                user4.data.skills.push(skill);
                return { ...state, user: user4 }
            }
            var index = user4.data.skills.indexOf(skill);
            if (index !== -1)
                user4.data.skills.splice(index, 1);
            return { ...state, user: user4 };
        case types.HANDLE_PROFILE_AVATAR_CHANGE:
            let { imgFile } = action;
            let url = URL.createObjectURL(imgFile);
            let user3 = state.user;
            user3.avatar = imgFile;
            return { ...state, user: user3, avatarPreviewUrl: url };
        case types.HANDLE_PROFILE_STEP_CHANGE:
            let { step } = action;
            return { ...state, step: step };
        case types.PROFILE_REQUEST:
            return { ...state, requestUpdate: true }
        case types.PROFILE_SUCCESS:
            return { ...state, requestUpdate: false }
        case types.PROFILE_FAILURE:
            return { ...state, requestUpdate: false }
        case types.HANDLE_PROFILE_STEP_BACK:
            state.step--;
            return { ...state }
        case types.HANDLE_PROFILE_STEP_NEXT:
            state.step++;
            if (state.step > state.currStep) state.currStep++;
            return { ...state };
        default:
            return state;
    }
}

export default myReducer;