import React from 'react';
import { Link } from 'react-router-dom';

class TopTeams extends React.Component {
    componentDidMount() {
        this.props.requestTeams();
    }

    render() {
        return (
            <div className="top-teams-div">
                <label className="top-teams-label">Popular Teams</label>
                <ul className="top-teams-list">
                    <li className="top-teams-list-item" >
                        <div className="lakers-div">

                        </div>
                        <p className="top-teams-text">
                            <Link to={'/teams/19'} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Lakers</Link>
                        </p>
                    </li>
                    <li className="top-teams-list-item">
                        <div className="warriors-div">

                        </div>
                        <p className="top-teams-text">
                            <Link to={'/teams/20'} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Warriors</Link>
                        </p>
                    </li>
                    <li className="top-teams-list-item">
                        <div className="celtics-div">

                        </div>
                        <p className="top-teams-text">
                            <Link to={'/teams/24'} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Celtics</Link>
                        </p>
                    </li>
                    <li className="top-teams-list-item">
                        <div className="knicks-div">

                        </div>
                        <p className="top-teams-text">
                            <Link to={'/teams/21'} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Knicks</Link>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TopTeams;