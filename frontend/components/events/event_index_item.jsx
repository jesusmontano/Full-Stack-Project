import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event, teams, venues }) => {
    debugger;
    let homeTeamName = teams[event.home_team_id].name;
    let awayTeamName = teams[event.away_team_id].name;
    let venueName = venues[event.venue_id].name;

    return (
        <li className="event-index-item">
                <div className="event-div"> 
                    <div className="event-information">
                        <p className="event-date">
                            {event.date}
                        </p>
                        <p>
                            {homeTeamName}  vs. {awayTeamName} at: {venueName}
                        </p>
                    </div>
                    <button className="buy-button">
                        <Link to={`events/${event.id}/tickets`} style={{ textDecoration: 'none', color: 'white' }}>See Tickets</Link>
                    </button>
                </div>
        </li>
    );
}

export default EventIndexItem;