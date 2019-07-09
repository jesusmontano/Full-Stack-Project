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