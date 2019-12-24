import * as types from '../constants/ActionTypes'
// function loadAvatarPreviewUrl() {
//     var userCookie = JSON.parse(localStorage.getItem('user'));
//     return userCookie ? userCookie.avatar : "";
// }

// function loadId() {
//     var userCookie = JSON.parse(localStorage.getItem('user'));
//     return userCookie ? userCookie.id : "";
// }

// function loadUsername() {
//     var userCookie = JSON.parse(localStorage.getItem('user'));
//     return userCookie ? userCookie.username : "";
// }

// function loadUserInfor(){
//     var userCookie = JSON.parse(localStorage.getItem('user'));
//     var user = userCookie.user;
//     return {
//             hoTen: user.hoTen,
//             gioiTinh: user.gioiTinh,
//             email: user.email,
//             sdt: user.sdt,
//             diaChi: user.diaChi,
//             ttp: user.ttp,
//             role: user.role,
//     }
// }

var initialState = {
    user: {
        id: 1,
        userName: 2,
        infor: {
            hoTen: '',
            gioiTinh: 1,
            email: "",
            sdt: "",
            diaChi: "",
            ttp: "",
            role: 0,
        },
        avatar: null,
        data: {
            trinhDo: 0,
            kyNang: [],
            giaTien: 0,
            tieuDe: "",
            tongQuan: ""
        }
    },
    step: 1,
    currStep: 1,
    avatarPreviewUrl: '',
    requestUpdate: false
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HANDLE_PROFILE_INFOR_CHANGE:
            let name1 = action.name, value1 = action.value;
            if (name1 === "gioiTinh") value1 = parseInt(value1);
            let user1 = state.user;
            user1.infor[name1] = value1;
            return { ...state, user: user1 };
        case types.HANDLE_PROFILE_DATA_CHANGE:
            let name2 = action.name, value2 = action.value;
            let user2 = state.user;
            user2.data[name2] = value2;
            return { ...state, user: user2 };
        case types.HANDLE_PROFILE_SKILLS_CHANGE:
            let skill = parseInt(action.value);
            let user4 = state.user;
            if (action.checked) {
                user4.data.kyNang.push(skill);
                return { ...state, user: user4 }
            }
            var index = user4.data.kyNang.indexOf(skill);
            if (index !== -1)
                user4.data.kyNang.splice(index, 1);
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