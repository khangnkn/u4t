import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import jwtDecode from 'jwt-decode';

import App from "./App";

import * as serviceWorker from './serviceWorker';
import configureStore from "./store/configureStore"
import setAuthorizationToken from "./utils/setAuthorizationToken";
import {setCurrentUser} from "./actions/authentication.actions";

const store = configureStore();

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    const user = jwtDecode(localStorage.jwtToken);
    console.log(user);
    store.dispatch(setCurrentUser(user));
}

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
