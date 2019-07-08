import React from 'react';
import VenueEventsIndexItem from './venue_events_index_item';

class VenueEventsIndex extends React.Component {
    componentDidMount() {
        this.props.requestEvents();
    }

    render() {
        if (this.props.events.length === 0) {
            return (
                <div>
                    <label className="events-index-label">
                        {this.props.venue.name} Upcoming Games
                </label>
                    <h3>Bummer! Looks like there aren't any events.</h3>
                    <p>Check back another time.</p>
                </div>
            )
        }
        return (
            <div>
                <label className="events-index-label">
                    Upcoming Games at {this.props.venue.name}
                </label>
                <ul className="events-list">
                    {this.props.events.map(event => (
                        <VenueEventsIndexItem event={event} key={event.id} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default VenueEventsIndex;