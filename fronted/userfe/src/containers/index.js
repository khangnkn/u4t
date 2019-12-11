import React from 'react';

import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import Search from './Search';

import {Route} from 'react-router-dom';
import {Router} from 'react-router-dom';
import {history} from '../helpers/HistoryHelper';


class App extends React.Component{
    render(){
        var userCookie = localStorage.getItem('user');
        return(
            <Router history = {history}>
                <Route path='/' exact component={Login}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                {true ? <Route path='/profile' component={Profile}></Route>:null}
                <Route path='/search' component={Search}></Route>
            </Router>
        );
    }
}

export default App;
