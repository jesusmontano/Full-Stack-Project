import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event }) => (
    <li className="event-index-item">
            <button className="event-button"> 
                <p className="event-date">
                    {event.date}
                </p>
                <p>
                    Home: {event.home_team_id}  vs. Away: {event.away_team_id} at: {event.venue_id}
                </p>
                <button className="buy-button">
                    See Tickets
                </button>
            </button>
    </li>
);

export default EventIndexItem;