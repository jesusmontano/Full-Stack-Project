import * as VenueAPIUtil from '../util/venue_api_util';

export const RECEIVE_VENUES = 'RECEIVE_VENUES';
export const RECEIVE_VENUE = 'RECEIVE_VENUE';

export const requestVenues = () => dispatch => (
    VenueAPIUtil.fetchVenues().then(venues => dispatch({ type: RECEIVE_VENUES, venues }))
);

export const requestVenue = (id) => dispatch => (
    VenueAPIUtil.fetchVenue(id).then(venue => dispatch({ type: RECEIVE_VENUE, venue }))
);