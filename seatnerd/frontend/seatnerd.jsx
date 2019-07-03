import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, signup, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    // Testing start
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    // Testing end
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to my SeatGeek clone.</h1>, root);
});