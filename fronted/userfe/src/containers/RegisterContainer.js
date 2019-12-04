import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import myReducer from '../reducers/index';
import Register from './Register';

import thunkMiddleware from 'redux-thunk';

var store = createStore(myReducer,applyMiddleware(
    thunkMiddleware
));

class RegisterContainer extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <Register></Register>
            </Provider>
        );
    }
}

export default RegisterContainer;