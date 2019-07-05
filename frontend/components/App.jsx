import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <div className="logo-and-title">
                <img className="seatgeek-logo" src="seatgeek_logo.png" alt=""/>
                <h1>SeatNerd</h1>
            </div>
            <GreetingContainer />
        </header>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <div className="home">
            <img src="cheering_fan.jpg" alt=""/>
            <div className="intro">Life's an event. We have the tickets.</div>
        </div>
        <footer>
            Jesus Montano
        </footer>
    </div>
);

export default App;