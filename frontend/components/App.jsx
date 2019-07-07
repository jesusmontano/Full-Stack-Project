import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import EventIndexContainer from './events/event_index_container';
import TeamIndexContainer from './teams/team_index_container';
import Splash from './splash/splash'
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
        <Splash />
        <Route exact path="/test" component={Splash}/>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/events" component={EventIndexContainer} />
        <Route exact path="/teams" component={TeamIndexContainer} />
        <footer>
            <a href="https://www.linkedin.com/in/jesus-montano-795311138/">
                <img className="linkedin-logo" src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/linkedin-128.png" alt=""/>
            </a>
            <a href="https://github.com/jesusmontano">
                <img className="linkedin-logo" src="https://image.flaticon.com/icons/png/128/25/25231.png" alt="" />
            </a>
        </footer>
    </div>
);

export default App;