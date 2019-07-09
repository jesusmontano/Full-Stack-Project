import { connect } from 'react-redux';
import CreateTicketForm from './create_ticket_form.jsx';
import { createTicket } from '../../actions/ticket_actions';

const mapStateToProps = (state, ownProps) => {
    const ticket = {
        owner_id: '',
        venue_id: '',
        event_id: '',
        price: '',
        row: '',
        section: ''
    }

    return { ticket };
};

const mapDispatchToProps = dispatch => {
    return {
        action: ticket => dispatch(createTicket(ticket)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicketForm);