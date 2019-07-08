import { connect } from 'react-redux';
import { requestVenue } from '../../actions/venue_actions';
import VenueEventsIndex from './venue_events_index';
import { requestEvents } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
    const venueId = Number(ownProps.match.params.venueId);
    const venue = state.entities.venues[venueId];
    const events = Object.values(state.entities.events).filter(event => event.venue_id === venueId);

    return ({
        venue: venue,
        events: events
    })
};

const mapDispatchToProps = dispatch => ({
    requestVenue: (id) => dispatch(requestVenue(id)),
    requestEvents: () => dispatch(requestEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(VenueEventsIndex);