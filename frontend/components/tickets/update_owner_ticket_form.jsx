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
        this.props.requestVenues();
        this.props.requestTeams();
        this.props.requestEvents();
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

        if (Object.values(this.props.venues).length === 0) {
            return null;
        }

        if (Object.values(this.props.teams).length === 0) {
            return null;
        }

        if (Object.values(this.props.events).length === 0) {
            return null;
        }

        let venueName = this.props.venues[this.props.ticket.venue_id].name;
        let venue = this.props.venues[this.props.ticket.venue_id];
        let event = this.props.events[this.props.ticket.event_id];
        let homeTeam = this.props.teams[event.home_team_id].name;
        let awayTeam = this.props.teams[event.away_team_id].name;

        return (
            <div className="checkout-form">
                <h3 className="checkout-form-header">
                    {awayTeam} at {homeTeam}
                </h3>
                <br/>
                <div>
                    {event.date} - {venueName}, {venue.city}, {venue.state}
                </div>
                <br/>
                <div>
                    Section {this.props.ticket.section} · Row {this.props.ticket.row}
                </div>
                <br/>
                <label className="order-summary">Order Summary</label>
                <br/>
                <div>
                    Total ${this.props.ticket.price}
                </div>
                <br/>
                <form onSubmit={this.handleSubmit}>
                            <input type="hidden" value={this.props.currentUserID}/>
                            <input className="checkout-button" type="submit" value="Buy Ticket" onClick={this.update('owner_id')}/>
                </form>
            </div>
        )
    }
}

export default UpdateOwnerTicketForm;