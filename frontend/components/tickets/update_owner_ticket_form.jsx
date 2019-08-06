import React from 'react';

class UpdateOwnerTicketForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            event_id: this.props.ticket.event_id,
            id: this.props.ticket.id,
            owner_id: this.props.owner_id,
            price: this.props.ticket.price,
            row: this.props.ticket.row,
            section: this.props.ticket.section,
            venue_id: this.props.ticket.venue_id
        }
    }

    componentDidMount() {
        this.props.fetchTicket(this.props.match.params.ticketId);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: this.props.currentUserID });
            this.setState({ event_id: this.props.ticket.event_id });
            this.setState({ id: this.props.ticket.id });
            this.setState({ price: this.props.ticket.price });
            this.setState({ row: this.props.ticket.row });
            this.setState({ section: this.props.ticket.section });
            this.setState({ venue_id: this.props.ticket.venue_id });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        if (this.props.currentUserID === null) {
            this.props.openModal('login')
        } else {
            this.props.action(this.state).then(() => this.props.history.push('/account'));
        }
        // this.props.action(this.state).then(() => this.props.history.push('/account'));
    }

    render() {
        return (
            <div>
                This is the ticketId: 
                {this.props.ticket.id}
                <form onSubmit={this.handleSubmit}>
                    <label> Are you sure you want to buy this ticket?
                            <input type="hidden" value={this.props.currentUserID}/>
                            <input type="submit" value="Complete Order" onClick={this.update('owner_id')}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default UpdateOwnerTicketForm;