import React from 'react';
import { Link } from 'react-router-dom';

class TopTeams extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestTeams();
    }

    render() {
        const lakers = this.props.teams.filter(team => 
            team.name === 'Los Angeles Lakers'
        )

        const warriors = this.props.teams.filter(team =>
            team.name === 'Golden State Warriors'
        )


        const celtics = this.props.teams.filter(team =>
            team.name === 'Boston Celtics'
        )


        const knicks = this.props.teams.filter(team =>
            team.name === 'New York Knicks'
        )

        debugger;

        if (this.props.teams.length === 0) {
            return (
                <div>
                    
                </div>
            )
        }


        return (
            <div className="top-teams-div">
                <label className="top-teams-label">Popular Teams</label>
                <ul className="top-teams-list">
                    <li className="top-teams-list-item" >
                        <Link to={`/teams/${lakers[0].id}`} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>
                            <div className="lakers-div">
                            </div>
                        </Link>

                        <p className="top-teams-text">
                            <Link to={`/teams/${lakers[0].id}`} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Lakers</Link>
                        </p>
                    </li>
                    <li className="top-teams-list-item">
                        <Link to={`/teams/${warriors[0].id}`} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>
                            <div className="warriors-div">
                            </div>
                        </Link>

                        <p className="top-teams-text">
                            <Link to={`/teams/${warriors[0].id}`} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Warriors</Link>
                        </p>
                    </li>
                    <li className="top-teams-list-item">
                        <Link to={`/teams/${celtics[0].id}`} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>
                            <div className="celtics-div">
                            </div>
                        </Link>

                        <p className="top-teams-text">
                            <Link to={`/teams/${celtics[0].id}`} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Celtics</Link>
                        </p>
                    </li>
                    <li className="top-teams-list-item">
                        <Link to={`/teams/${knicks[0].id}`} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>
                            <div className="knicks-div">
                            </div>
                        </Link>

                        <p className="top-teams-text">
                            <Link to={`/teams/${knicks[0].id}`} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Knicks</Link>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TopTeams;