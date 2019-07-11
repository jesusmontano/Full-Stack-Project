import React from 'react';

class Account extends React.Component {
    componentDidMount() {
        this.props.requestEvents();
        this.props.requestVenues();
        this.props.requestTeams();
        this.props.fetchTickets();
    }

    render() {
        return (
            <div>
                These are the ticked owned by the user with ID: {this.props.userId}
                Those tickets IDs are: {this.props.tickets.map(ticket => (ticket.id))}
            </div>
        )
    }
}

export default Account;