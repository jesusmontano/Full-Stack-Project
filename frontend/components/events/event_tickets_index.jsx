import React from 'react';
import EventTicketsIndexItem from './event_tickets_index_item';
import { Link } from 'react-router-dom';

class EventTicketsIndex extends React.Component {
    componentDidMount() {
        this.props.requestEvents();
        this.props.fetchTickets();
        this.props.requestTeams();
        this.props.requestVenues();
    }

    render() {

        if (Object.values(this.props.tickets).length === 0) {
            return (
                <div>
                    <label className="events-index-label">
                        Tickets for {this.props.teams[this.props.event.home_team_id].name} vs. {this.props.teams[this.props.event.away_team_id].name} on {this.props.event.date}
                    </label>
                        <div className="no-events-div">
                            <h3 className="bummer-no-events-header">Bummer! Looks like there aren't any tickets.</h3>
                            <p className="check-back-tag">Check back another time.</p>
                        </div>
                </div>
            )
        }

        return(
            <div>
                <label className="event-tickets-index-label">
                    Tickets for {this.props.teams[this.props.event.home_team_id].name} vs. {this.props.teams[this.props.event.away_team_id].name} on {this.props.event.date}
                </label>
                <ul>
                    {this.props.tickets.map(ticket => (
                        <EventTicketsIndexItem ticket={ticket} key={ticket.id} props={this.props}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default EventTicketsIndex;