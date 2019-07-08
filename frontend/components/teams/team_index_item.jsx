import React from 'react';
import { Link } from 'react-router-dom';

const TeamIndexItem = ({ team }) => (
    <li>
        <button className="team-index-item-buttons">
            <Link to={`/teams/${team.id}`} style={{ textDecoration: 'none', color: 'white' }}>{team.name}</Link>
        </button>
        <br/>
    </li>
);

export default TeamIndexItem;