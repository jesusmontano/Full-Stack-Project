import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event }) => (
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
                    See Tickets
                </button>
            </div>
    </li>
);

export default EventIndexItem;