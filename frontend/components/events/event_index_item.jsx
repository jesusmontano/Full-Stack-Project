import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event }) => (
    <li>
        Date: {event.date}
        <br/>
        Home Team ID: {event.home_team_id} 
        <br/>
        vs. 
        <br/>
        {event.away_team_id} 
        <br/>
        Venue: {event.venue_id}
    </li>
);

export default EventIndexItem;