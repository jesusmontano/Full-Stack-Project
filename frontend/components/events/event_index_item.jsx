import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event }) => (
    <li>
        {event.date}
        {event.home_team_id} vs. {event.away_team_id} at {venue.id}
    </li>
);

export default EventIndexItem;