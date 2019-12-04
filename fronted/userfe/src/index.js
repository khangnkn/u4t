import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Login from './containers/LoginContainer'
import Register from './containers/RegisterContainer'

import {Route} from 'react-router-dom';
import {Router} from 'react-router-dom';
import {history} from './helpers/HistoryHelper';

ReactDOM.render(
    <Router history = {history}>
        <Route path='/' exact component={Login}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
    </Router>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
