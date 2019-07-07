import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event }) => (
    <li className="event-index-item">
            <button className="event-button"> 
                <div>
                    {event.date}
                </div>
                <div>
                    Home: {event.home_team_id}  vs. Away: {event.away_team_id} at: {event.venue_id}
                </div>
                <button className="buy-button">
                    Buy
                </button>
            </button>
    </li>
);

export default EventIndexItem;