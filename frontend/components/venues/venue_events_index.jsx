import React from 'react';
import VenueEventsIndexItem from './venue_events_index_item';

class VenueEventsIndex extends React.Component {
    componentDidMount() {
        this.props.requestEvents();
        this.props.requestVenues();
        this.props.requestTeams();
        this.props.fetchTickets()
    }

    render() {

        if (Object.values(this.props.venues).length === 0) {
            return null;
        }

        if (!this.props.teams) {
            return 'Loading teams...'
        }

        if (!this.props.venue) {
            return 'Loading venue...'
        }

        debugger;

        if (this.props.events.length === 0) {
            return (
                <div>
                    <label className="events-index-label">
                        {this.props.venue.name} Upcoming Games
                </label>
                    <div className="no-events-div">
                            <h3 className="bummer-no-events-header">Bummer! Looks like there aren't any events.</h3>
                            <p className="check-back-tag">Check back another time.</p>
                    </div>
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
                        <VenueEventsIndexItem event={event} key={event.id} venues={this.props.venues} teams={this.props.teams}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default VenueEventsIndex;