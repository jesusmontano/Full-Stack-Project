import React from 'react';
import EventIndexItem from './event_index_item';
import { Link } from 'react-router-dom';

class EventIndex extends React.Component {
    componentDidMount() {
        this.props.requestEvents();
        this.props.requestVenues();
        this.props.requestTeams();
    }

    render() {
        if (Object.values(this.props.venues).length === 0) {
            return null;
        }

        if (this.props.events.length === 0) {
            return null;
        }

        if (Object.values(this.props.teams).length === 0) {
            return null;
        }

        debugger;

        return (
            <div>
                <label className="events-index-label">
                    Upcoming Games
                </label>
                <ul className="events-list">
                    {this.props.events.map(event => (
                        <EventIndexItem event={event} key={event.id} venues={this.props.venues} teams={this.props.teams}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default EventIndex;