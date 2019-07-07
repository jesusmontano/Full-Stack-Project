import React from 'react';
import VenueIndexItem from './venue_index_item';
import { Link } from 'react-router-dom';

class VenueIndex extends React.Component {
    componentDidMount() {
        this.props.requestVenues();
    }

    render() {
        return (
            <div>
                <label className="venues-index-label">
                    Venues
                </label>
                <ul className="venues-list">
                    {this.props.venues.map(venue => (
                        <VenueIndexItem venue={venue} key={venue.id} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default VenueIndex;