import React from 'react';
import { Link } from 'react-router-dom';

const TopTeams = () => (
    <div className="top-teams-div">
        <label className="top-teams-label">Popular Teams</label>
        <ul className="top-teams-list">
            <li className="top-teams-list-item" >
                <div>
                    Image here.
                </div>
                <p>
                    <Link to={'/teams/13'}>Los Angeles Lakers</Link>
                </p>
            </li>
            <li className="top-teams-list-item"> 
                <div>
                    Image here.
                </div>
                <p>
                    <Link to={'/teams/14'}>Golden State Warriors</Link>
                </p>
            </li>
        </ul>
    </div>
)

export default TopTeams;