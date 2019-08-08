import React from 'react';
import AccountTicketItem from './account_ticket_item';
import { Link } from 'react-router-dom'

class Account extends React.Component {
    componentDidMount() {
        this.props.requestEvents();
        this.props.requestVenues();
        this.props.requestTeams();
        this.props.fetchTickets();
    }

    render() {
        if (!(this.props.userId)) {
            return (
                <label className="events-index-label">
                    You must be logged in to view the contents of this page. Log back in to access your account.
                </label>
            )
        }

        if (this.props.tickets.length === 0) {
            return (
                <div>
                    <label className="events-index-label">
                        My Tickets
                    </label>
                        <div className="no-events-div">
                            <h3 className="bummer-no-events-header">Bummer! Looks like you don't own any tickets.</h3>
                            <p className="check-back-tag">Add a ticket to sell or check out our marketplace.</p>
                        </div>
                </div>
            )
        }

        if (Object.values(this.props.teams).length === 0) {
            return null;
            // return (
            //     <p>Your must be logged in to view the contents of this page.</p>
            // )
        }

        if (Object.values(this.props.venues).length === 0) {
            return null;
            // return (
            //     <p>Your must be logged in to view the contents of this page.</p>
            // )
        }

        if (Object.values(this.props.events).length === 0) {
            return null;
            // return (
            //     <p>Your must be logged in to view the contents of this page.</p>
            // )
        }

        return (
            <div>
                <label className="events-index-label">
                    My Ticket Listings
                </label>
                <ul>
                    {this.props.tickets.map(ticket => (
                        <AccountTicketItem ticket={ticket} key={ticket.id}
                        events={this.props.events} teams={this.props.teams} venues={this.props.venues}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Account;