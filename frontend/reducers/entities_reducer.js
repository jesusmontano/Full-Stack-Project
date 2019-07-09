import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import EventsReducer from './events_reducer';
import TeamsReducer from './teams_reducer';
import VenuesReducer from './venues_reducer';
import TicketsReducer from './tickets_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: EventsReducer,
    teams: TeamsReducer,
    venues: VenuesReducer,
    tickets: TicketsReducer
});

export default entitiesReducer;