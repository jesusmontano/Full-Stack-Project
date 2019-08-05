import { connect } from 'react-redux';
import UpdatePriceTicketForm from './update_price_ticket_form.jsx';
import { fetchTicket, updateTicket } from '../../actions/ticket_actions';

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

    return { ticket, formType };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTicket: id => dispatch(fetchTicket(id)),
        action: ticket => dispatch(updateTicket(ticket)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePriceTicketForm);