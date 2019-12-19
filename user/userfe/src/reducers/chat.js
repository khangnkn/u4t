import * as types from '../constants/ActionTypes'
var getIdUser = () =>{
    try {
        var userCookie = JSON.parse(localStorage.getItem('user'));
        return userCookie.Id;
    } catch(ex){
        return '';
    }
    
}
var initialState = {
    chat: {
        message: '',
        by: getIdUser(),
        at: '',
    },
    story: {
        messages: [
            {
                content: 'asfasfouiaif',
                by: {
                    Id: 'daf',
                    avatar: '../public/images/user.png'
                },
                at: '19/12/2019'
            },
            {
                content: 'asfasfouiaif',
                by: {
                    Id: 'daf',
                    avatar: '../public/images/user.png'
                },
                at: '19/12/2019'
            }
        ]
    }
}

var myReducer = (state = initialState,action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default myReducer;