import React from 'react';

import { Route, Router } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
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
    <div>
      <div className="">
        <Router history={history}>
          <Route path="/" exact component={Home} />
          <Route path="/tutorprofile/:id" component={TeacherProfile} />
          <Route path="/contract/create" component={CreateContract} />
          <Route path="/chat" component={RoomChat} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {true ? <Route path="/profile" component={Profile} /> : null}
          <Route path="/search" component={Search} />
        </Router>
      </div>
    </div>
  );
};

export default App;
