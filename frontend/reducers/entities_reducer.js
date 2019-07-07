import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import EventsReducer from './events_reducer';
import TeamsReducer from './teams_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: EventsReducer,
    teams: TeamsReducer
});

export default entitiesReducer;