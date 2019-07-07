import React from 'react';
import { Link } from 'react-router-dom';

const TeamIndexItem = ({ team }) => (
    <li>
        Name: {team.name}
    </li>
);

export default TeamIndexItem;