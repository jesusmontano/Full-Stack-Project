import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import EventIndexContainer from './events/event_index_container';
import TeamIndexContainer from './teams/team_index_container';
import VenueIndexContainer from './venues/venue_index_container';
import TeamEventsIndexContainer from './teams/team_events_index_container';
import SplashContainer from './splash/splash_container'
import TopTeamsContainer from './top_teams/top_teams_container';
import VenueEventsIndexContainer from './venues/venue_events_index_container';
import EventTicketsIndexContainer from './events/event_tickets_index_container';
import CreateTicketFormContainer from './tickets/create_ticket_form_container';
import TopVenuesContainer from './top_venues/top_venues_container';
import AccountContainer from './account/account_container';
import EditPriceTicketFormContainer from './tickets/edit_price_ticket_form_container';
import EditOwnerTicketFormContainer from './tickets/edit_owner_ticket_form_container';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <SplashContainer />
        <Route exact path="/" component={TopTeamsContainer}/>
        <Route exact path="/" component={TopVenuesContainer}/>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/events" component={EventIndexContainer} />
        <Route exact path="/teams" component={TeamIndexContainer} />
        <Route exact path="/venues" component={VenueIndexContainer} />
        <Route exact path="/teams/:teamId" component={TeamEventsIndexContainer} />
        <Route exact path="/venues/:venueId" component={VenueEventsIndexContainer} />
        <Route exact path="/events/:eventId/tickets" component={EventTicketsIndexContainer} />
        <Route exact path="/sell" component={CreateTicketFormContainer} />
        <Route exact path="/account" component={AccountContainer} />
        <Route exact path="/ticket/editprice/:ticketId" component = {EditPriceTicketFormContainer} />
        <Route exact path="/checkout/:ticketId" component = {EditOwnerTicketFormContainer} />
        <footer>
            {/* <a href="https://www.linkedin.com/in/jesus-montano-795311138/">
                <img className="linkedin-logo" src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/linkedin-128.png" alt=""/>
            </a>
            <a href="https://github.com/jesusmontano">
                <img className="linkedin-logo" src="https://image.flaticon.com/icons/png/128/25/25231.png" alt="" />
            </a> */}

            <a href="https://www.linkedin.com/in/jesus-montano-795311138/">
                <img className="linkedin-logo" src="https://icongr.am/simple/linkedin.svg"
                    alt="" />
            </a>
            <a href="https://github.com/jesusmontano">
                <img className="linkedin-logo" src="https://icongr.am/simple/github.svg" alt="" />
            </a>
            <a href="https://angel.co/jesus-montano">
                <img className="linkedin-logo" src="https://icongr.am/simple/angellist.svg" alt="" />
            </a>
            <a href="mailto:jesusmontano96@gmail.com">
                <img className="linkedin-logo"
                    src="https://icongr.am/entypo/mail.svg" alt="" />
            </a>
            <a href="https://jesusmontano.github.io/jesusmontano/">
                <img className="linkedin-logo" src="https://icongr.am/entypo/home.svg" alt="" />
            </a>
            
        </footer>
        <br/>
        <div className="copyright">
            &copy; Jesus Montano 2019
        </div>
        <br/>
    </div>
);

export default App;