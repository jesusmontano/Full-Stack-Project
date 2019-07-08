import React from 'react';
import TeamEventsIndexItem from './team_events_index_item';

class TeamEventsIndex extends React.Component {
    componentDidMount() {
        this.props.requestTeam(this.props.match.params.teamId);
    }

    render() {
        return (
            <div>
                <label className="events-index-label">
                    {this.props.team.name} Upcoming Games
                </label>
                <ul className="events-list">
                    {this.props.homeEvents.concat(this.props.awayEvents).map(event => (
                        <TeamEventsIndexItem event={event} key={event.id} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default TeamEventsIndex;