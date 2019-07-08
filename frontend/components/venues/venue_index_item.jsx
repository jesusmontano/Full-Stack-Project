import React from 'react';
import { Link } from 'react-router-dom';

const VenueIndexItem = ({ venue }) => (
    <li className="venue-index-item">
        <div className="venue-index-item-div">
            <Link to={`venues/${venue.id}`} style={{ textDecoration: 'none', color: 'rgb(81, 82, 84)' }}>
                <p className="venue-name">{venue.name}</p>
                <p className="venue-location">{venue.city}, {venue.state}</p>
            </Link>
        </div>
    </li>
);

export default VenueIndexItem;