import { connect } from 'react-redux';
import { requestVenues } from '../../actions/venue_actions';
import VenueEventsIndex from './venue_events_index';
import { requestEvents } from '../../actions/event_actions';
import { fetchTickets } from '../../actions/ticket_actions'
import { requestTeams } from '../../actions/team_actions';


const mapStateToProps = (state, ownProps) => {
    const venueId = Number(ownProps.match.params.venueId);
    const venue = state.entities.venues[venueId];
    const events = Object.values(state.entities.events).filter(event => event.venue_id === venueId);
    const teams = state.entities.teams;
    const venues = state.entities.venues;

    return ({
        venue: venue,
        events: events,
        teams: teams,
        venues: venues
    })
};

const mapDispatchToProps = dispatch => ({
    requestVenues: () => dispatch(requestVenues()),
    requestEvents: () => dispatch(requestEvents()),
    fetchTickets: () => dispatch(fetchTickets()),
    requestTeams: () => dispatch(requestTeams())
});

export default connect(mapStateToProps, mapDispatchToProps)(VenueEventsIndex);