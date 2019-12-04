import React from 'react';

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import myReducer from '../reducers/index';
import Login from './Login';

import thunkMiddleware from 'redux-thunk';

var store = createStore(myReducer,applyMiddleware(
    thunkMiddleware
));

class LoginContainer extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <Login></Login>
            </Provider>
        );
    }
}

export default LoginContainer;