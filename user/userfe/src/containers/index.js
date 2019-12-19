import React from 'react';

import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import Search from './Search';
import Home from './Home';
import TeacherProfile from './TeacherProfile';
import CreateContract from './CreateContract';
import RoomChat from './RoomChat';

import NavBar from './NavBar';
import Footer from './Footer';

import { Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { history } from '../helpers/HistoryHelper';
import { Nav } from 'react-bootstrap';
// import './../public/stylesheets/air2-ng-homepage.css';

class App extends React.Component {
    render() {
        var userCookie = localStorage.getItem('user');
        return (
            <div>
                {/* <NavBar></NavBar> */}
                <div className="">
                    <Router history={history}>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/tutorprofile' component={TeacherProfile}></Route>
                        <Route path='/contract/create' component={CreateContract}></Route>
                        <Route path='/chat' component={RoomChat}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Register}></Route>
                        {true ? <Route path='/profile' component={Profile}></Route> : null}
                        <Route path='/search' component={Search}></Route>
                    </Router>
                </div>
                {/* <Footer></Footer> */}
            </div>
        );
    }
}

export default App;
