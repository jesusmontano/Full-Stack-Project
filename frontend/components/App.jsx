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

const App = () => (
    <div>
        <header>
            <h1>SeatNerd</h1>
            <img src="logo.jpg" alt=""/>
            <GreetingContainer />
        </header>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <div>
            <img src="cheering_fan.jpg" alt=""/>
            <h3>Life's an event.</h3>
            <h3>We have the tickets.</h3>
        </div>
        <footer>
            Jesus Montano
        </footer>
    </div>
);

export default App;