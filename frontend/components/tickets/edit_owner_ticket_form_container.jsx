import { connect } from 'react-redux';
import UpdateOwnerTicketForm from './update_owner_ticket_form.jsx';
import { fetchTicket, updateTicket } from '../../actions/ticket_actions';

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

    return { ticket, formType, currentUserID };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTicket: id => dispatch(fetchTicket(id)),
        action: ticket => dispatch(updateTicket(ticket))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateOwnerTicketForm);