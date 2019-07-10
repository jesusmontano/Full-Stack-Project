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
                        <div>
                            <p className="event-date">
                                {event.date}
                            </p>
                        </div>
                        <div className="teams-and-location-div">
                            <p className="away-team-home-team-tag">
                                {awayTeamName} at {homeTeamName}
                            </p>
                            <p>
                                {venueName}
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