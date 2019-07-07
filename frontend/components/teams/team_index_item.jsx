import React from 'react';
import { Link } from 'react-router-dom';

const TeamIndexItem = ({ team }) => (
    <li>
        <button className="team-index-item-buttons">
            {team.name}
        </button>
        <br/>
    </li>
);

export default TeamIndexItem;