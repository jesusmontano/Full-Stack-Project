import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event }) => (
    <li className="event-index-item">
        <div className="event-index-item-div">
            <div>
                Date: {event.date}
            </div>
            <br/>
            <div>
                Home Team ID: {event.home_team_id}  vs. Away Team ID: {event.away_team_id} 
                <br/>
                Venue ID: {event.venue_id}
            </div>
        </div>
    </li>
);

export default EventIndexItem;