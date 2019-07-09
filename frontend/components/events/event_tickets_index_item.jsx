import React from 'react'
import { Link } from 'react-router-dom';

const EventTicketsIndexItem = ({ ticket }) => (
    <div>
        <li>
            Price: {ticket.price}
            Row: {ticket.row}
            Section: {ticket.section}
        </li>
    </div>
)

export default EventTicketsIndexItem;