import React from 'react';
import { Link } from 'react-router-dom';

const AccountTicketItem = ({ticket, events, teams, venues, deleteTicket}) => {
    debugger;
    const homeTeamId = events[ticket.event_id].home_team_id;
    const awayTeamId = events[ticket.event_id].away_team_id;
    const homeTeamName = teams[homeTeamId].name;
    const awayTeamName = teams[awayTeamId].name; 
    const date = events[ticket.event_id].date;
    const venue = venues[ticket.venue_id].name;

    if (!(events)) {
        return null;
    }

    if (!(ticket)) {
        return null;
    }

    if (!(teams)) {
        return null;
    }

    return (
        <li className="my-tickets-list-item">
            <div className="ticket-div">
                <div>
                    <p className="event-date">
                        {date}
                    </p>
                </div>
                <div>
                    <p className="event-date">
                        Section {ticket.section}: Row {ticket.row}
                    </p>
                </div>
                <div className="teams-and-location-div">
                    <p className="away-team-home-team-tag"> 
                        {awayTeamName} at {homeTeamName}
                    </p>
                    <p>
                        {venue}
                    </p>
                </div>
                <div>
                    <p className="event-date">
                        Price: ${ticket.price}
                    </p>
                </div>
                <div>
                    <div>
                        <button className="buy-button-top"><Link to={`/ticket/editprice/${ticket.id}`} style={{ textDecoration: 'none', color: 'white' }}>Update Price</Link>
                        </button>
                    </div>
                    <div>
                        <button onClick={() => deleteTicket(ticket.id)} className="buy-button">Remove</button>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default AccountTicketItem;