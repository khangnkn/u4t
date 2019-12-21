import * as types from '../constants/ActionTypes'
var getIdUser = () =>{
    try {
        var userCookie = JSON.parse(localStorage.getItem('user'));
        return userCookie;
    } catch(ex){
        return {};
    }
    
}
var initialState = {
    mess: {
        content: '',
        by: getIdUser(),
        timestamp: '',
    },
    roomList: {

    },
    story: {
        _id: 'afsaiop',
        created_at: '24:00 10/20/2019',
        teacher: {

        },
        learner: {

        },
        messages: [
            {
                content: 'asfasfouiaif',
                by: {
                    _id: 'daf',
                    avatar: '../public/images/user.png'
                },
                timestamp: '19/12/2019',
                seen: true
            },
            {
                content: 'asfasfouiaif',
                by: {
                    _id: 'daf',
                    avatar: '../public/images/user.png'
                },
                at: '19/12/2019'
            }
        ]
    }
}

var myReducer = (state = initialState,action) => {
    switch(action.type){
        case types.HANDLE_RELOAD_CHAT_ROOM:
            state.roomList = action.room;
            return {...state};
        case types.HANDLE_MESSAGE_CHAT_ROOM:

        default:
            return state;
    }
}

export default myReducer;