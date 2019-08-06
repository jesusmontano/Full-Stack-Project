import { connect } from 'react-redux';
import UpdatePriceTicketForm from './update_price_ticket_form.jsx';
import { fetchTicket, updateTicket } from '../../actions/ticket_actions';
import { requestVenues } from '../../actions/venue_actions';
import { requestTeams } from '../../actions/team_actions';
import { requestEvents } from '../../actions/event_actions';

const mapStateToProps = ( state, ownProps ) => {
    const defaultTicket = {
        owner_id: '',
        venue_id: '',
        event_id: '',
        price: '',
        row: '',
        section: ''
    };
    const ticket = state.entities.tickets[ownProps.match.params.ticketId] || defaultTicket;
    const formType = 'Update Ticket';
    const events = state.entities.events;
    const teams = state.entities.teams;
    const venues = state.entities.venues;

    return { ticket, formType, events, teams, venues };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTicket: id => dispatch(fetchTicket(id)),
        action: ticket => dispatch(updateTicket(ticket)),
        requestVenues: () => dispatch(requestVenues()),
        requestTeams: () => dispatch(requestTeams()),
        requestEvents: () => dispatch(requestEvents())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePriceTicketForm);