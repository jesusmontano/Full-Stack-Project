import { connect } from 'react-redux';
import UpdateOwnerTicketForm from './update_owner_ticket_form.jsx';
import { fetchTicket, updateTicket } from '../../actions/ticket_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { requestVenues } from '../../actions/venue_actions';
import { requestTeams } from '../../actions/team_actions';
import { requestEvents } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
    const defaultTicket = {
        owner_id: '',
        venue_id: '',
        event_id: '',
        price: '',
        row: '',
        section: ''
    };
    const ticket = state.entities.tickets[ownProps.match.params.ticketId] || defaultTicket;
    const formType = 'Buy Ticket';
    const currentUserID = state.session.id || null;
    const events = state.entities.events;
    const teams = state.entities.teams;
    const venues = state.entities.venues;

    return { ticket, formType, currentUserID, events, teams, venues };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTicket: id => dispatch(fetchTicket(id)),
        action: ticket => dispatch(updateTicket(ticket)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        requestVenues: () => dispatch(requestVenues()),
        requestTeams: () => dispatch(requestTeams()),
        requestEvents: () => dispatch(requestEvents())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateOwnerTicketForm);