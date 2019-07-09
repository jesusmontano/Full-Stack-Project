import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';
import { fetchTickets } from '../../actions/ticket_actions';
import EventTicketsIndex from './event_tickets_index';

const mapStateToProps = (state, ownProps) => {
    const eventId = Number(ownProps.match.params.eventId);
    const event = state.entities.events[eventId];
    const tickets = Object.values(state.entities.tickets).filter(ticket => ticket.event_id === eventId);

    return ({
        tickets: tickets
    })
};

const mapDispatchToProps = dispatch => ({
    requestEvents: () => dispatch(requestEvents()),
    fetchTickets: () => dispatch(fetchTickets())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventTicketsIndex);