import * as types from '../constants/ActionTypes'
var initialState = {
    tutorInfor: {
        user: {
            data: {
                skills: [
                ],
                title: '',
                price: 0,
                level: {
                    _id: '',
                    name: ''
                }
            },
            avatar: '',
            city: {
                _id: "",
                name: ""
            },
            fullname: "",
            address: ""
        },
        contacts: []
    },
    contract: {
        idTutor: '',
        idSt: '',
        tieuDe: '',
        moTa: '',
        giaTien: 0,
        tongTien: 0,
        ghGio: 0,
        ngayBatDau: '',
        ngayKetThuc: '',
        // kyNang: []
        skills: ''
    },
    requestCreate: false
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HANDLE_CREATE_CONTRACT_SET_ID_USER:

            state.contract.idSt = action.idSt;
            state.contract.idTutor = action.idTutor;
            state.tutorInfor = action.data;
            return { ...state };
        case types.HANDLE_CREATE_CONTRACT_DATA_CHANGE:
            var value = action.value;
            if (action.name === 'ghGio' || action.name === 'giaTien' || action.name === 'tongTien') {
                value = parseFloat(value);
            }
            state.contract[action.name] = value;
            return { ...state };
        case types.HANDLE_CREATE_CONTRACT_SKILL_CHANGE:
            let skill = parseInt(action.value);
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
            state.contract.ngayBatDau = action.date;
            console.log(state);
            return { ...state };
        case types.HANDLE_CREATE_CONTRACT_DATE_END_CHANGE:
            state.contract.ngayKetThuc = action.date;
            return { ...state };
        case types.CREATE_CONTRACT_REQUEST:
            return { ...state, requestCreate: true };
        case types.CREATE_CONTRACT_SUCCESS:
            return { ...state, requestCreate: false };
        case types.CREATE_CONTRACT_FAILURE:
            return { ...state, requestCreate: false };
        default:
            return state
    }
}

export default myReducer;
