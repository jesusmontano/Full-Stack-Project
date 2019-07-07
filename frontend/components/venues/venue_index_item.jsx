import React from 'react';
import { Link } from 'react-router-dom';

const VenueIndexItem = ({ venue }) => (
    <li className="venue-index-item">
        <button className="venue-button">
            <h3>{venue.name}</h3>
            <p>{venue.city}, {venue.state}</p>
        </button>
    </li>
);

export default VenueIndexItem;