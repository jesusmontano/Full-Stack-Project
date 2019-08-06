import React from 'react';

class UpdatePriceTicketForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.ticket;
    }

    componentDidMount() {
        this.props.fetchTicket(this.props.match.params.ticketId);
        this.props.requestVenues();
        this.props.requestTeams();
        this.props.requestEvents();
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push('/account'));
    }

    render() {
        const venueName = this.props.venues[this.props.ticket.venue_id].name;
        const venue = this.props.venues[this.props.ticket.venue_id];
        const event = this.props.events[this.props.ticket.event_id];
        const homeTeam = this.props.teams[event.home_team_id].name;
        const awayTeam = this.props.teams[event.away_team_id].name;
        debugger;

        return (
            <div className="update-price-form">
                <h3 className="update-price-form-header">
                    List on SeatNerd
                </h3>
                <br/>
                <div>
                    {awayTeam} at {homeTeam}
                </div>
                <br/>
                <div>
                    {event.date} - {venueName}, {venue.city}, {venue.state}
                </div>
                <br/>
                <div>
                    Section {this.props.ticket.section} · Row {this.props.ticket.row}
                </div>
                <br/>
                <div>
                    Ticket ID: {this.props.ticket.id}
                </div>
                <br/>
                <form className="update-price-user-inputs" onSubmit={this.handleSubmit}>
                        <input className="create-ticket-input"
                            type="text"
                            value={this.state.price}
                            onChange={this.update('price')}/>
                        <br/>
                        <input className="update-price-button" type="submit" value="Update Price"/>
                </form>
            </div>
        )
    }


}

export default UpdatePriceTicketForm; 