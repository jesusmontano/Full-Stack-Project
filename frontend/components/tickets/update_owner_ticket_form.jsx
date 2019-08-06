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
        const venueName = this.props.venues[this.props.ticket.venue_id].name;
        const venue = this.props.venues[this.props.ticket.venue_id];
        const event = this.props.events[this.props.ticket.event_id];
        const homeTeam = this.props.teams[event.home_team_id].name;
        const awayTeam = this.props.teams[event.away_team_id].name;
        debugger;

        return (
            <div>
                <div>
                    {awayTeam} at {homeTeam}
                </div>
                <div>
                    {event.date} - {venueName}, {venue.city}, {venue.state}
                </div>
                <div>
                    Section {this.props.ticket.section} · Row {this.props.ticket.row}
                </div>
                <label>Order Summary</label>
                <div>
                    Total ${this.props.ticket.price}
                </div>
                <form onSubmit={this.handleSubmit}>
                            <input type="hidden" value={this.props.currentUserID}/>
                            <input type="submit" value="Complete Order" onClick={this.update('owner_id')}/>
                </form>
            </div>
        )
    }
}

export default UpdateOwnerTicketForm;