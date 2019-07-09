import React from 'react';
import EventTicketsIndexItem from './event_tickets_index_item';
import { Link } from 'react-router-dom';

class EventTicketsIndex extends React.Component {
    componentDidMount() {
        this.props.requestEvents();
        this.props.fetchTickets();
    }

    render() {
        return(
            <div>
                <label className="event-tickets-index-label">
                    Tickets for {this.props.event.home_team_id} vs. {this.props.event.away_team_id} on {this.props.event.date}
                </label>
                <ul>
                    {this.props.tickets.map(ticket => (
                        <EventTicketsIndexItem ticket={ticket} key={ticket.id}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default EventTicketsIndex;