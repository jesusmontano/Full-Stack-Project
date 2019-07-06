import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';

export const requestEvents = () => dispatch => (
    EventAPIUtil.fetchEvents().then(events => dispatch({ type: RECEIVE_EVENTS, events }))
);

export const requestEvent = (id) => dispatch => (
    EventAPIUtil.fetchEvent(id).then(event => dispatch({ type: RECEIVE_EVENT, event }))
);