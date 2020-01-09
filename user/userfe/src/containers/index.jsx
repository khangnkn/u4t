import React from 'react';

import {
  Route, Router, Switch, Redirect,
} from 'react-router-dom';
import Login from './Login';
import Register from './Register.jsx';
import Profile from './Profile';
import Search from './Search';
import Home from './Home';
import TeacherProfile from './TeacherProfile';
import CreateContract from './CreateContract';
import RoomChat from './RoomChat';

import history from '../helpers/HistoryHelper';

const App = () => {
  const userCookie = localStorage.getItem('user');
  return (
  // <div>
  // /* <div className=""> */
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/user/detail/:id" component={TeacherProfile} />
        <Route path="/contract/create" component={CreateContract} />
        <Route path="/message" component={RoomChat} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={Search} />
        {userCookie ? <Route path="/profile" component={Profile} /> : <Redirect to="/home" />}

      </Switch>
    </Router>
  // </div>
  // </div>
  );
};

export default App;
