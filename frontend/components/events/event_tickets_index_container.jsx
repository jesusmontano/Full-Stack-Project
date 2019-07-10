import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';
import { fetchTickets } from '../../actions/ticket_actions';
import EventTicketsIndex from './event_tickets_index';
import { requestVenues } from '../../actions/venue_actions';
import { requestTeams } from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => {
    const eventId = Number(ownProps.match.params.eventId);
    const event = state.entities.events[eventId];
    const tickets = Object.values(state.entities.tickets).filter(ticket => ticket.event_id === eventId);
    const teams = state.entities.teams;
    const venues = state.entities.venues;


    return ({
        tickets: tickets,
        event: event,
        teams: teams,
        venues: venues
    })
};

const mapDispatchToProps = dispatch => ({
    requestEvents: () => dispatch(requestEvents()),
    fetchTickets: () => dispatch(fetchTickets()),
    requestTeams: () => dispatch(requestTeams()),
    requestVenues: () => dispatch(requestVenues())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventTicketsIndex);