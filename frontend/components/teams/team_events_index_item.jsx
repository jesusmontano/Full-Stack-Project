import React from 'react';
import { Link } from 'react-router-dom'

const TeamEventsIndexItem = ({ event }) => (
    <li className="event-index-item">
        <div className="event-div">
            <div className="event-information">
                <p className="event-date">
                    {event.date}
                </p>
                <p>
                    {event.home_team_id}  vs. {event.away_team_id} at: {event.venue_id}
                </p>
            </div>
            <button className="buy-button">
                <Link to={`events/${event.id}/tickets`} style={{ textDecoration: 'none', color: 'white' }}>See Tickets</Link>
            </button>
        </div>
    </li>
);

export default TeamEventsIndexItem;