import React from 'react';
import TeamIndexItem from './team_index_item';
import { Link } from 'react-router-dom';

class TeamIndex extends React.Component {
    componentDidMount() {
        this.props.requestTeams();
    }

    render() {
        return (
            <div>
                <label className="teams-index-label">Teams</label>
                <ul className="teams-list">
                    {this.props.teams.map(team => (
                        <TeamIndexItem team={team} key={team.id} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default TeamIndex;