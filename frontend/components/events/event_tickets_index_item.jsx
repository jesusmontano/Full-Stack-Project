import React from 'react'
import { Link } from 'react-router-dom';

const EventTicketsIndexItem = ({ ticket }) => (
    <div>
        <li className="event-tickets-index-item-li">
            <div>
                Section {ticket.section} · Row {ticket.row}
            </div>
            <div>
                <button className="buy-button-ticket">${Math.trunc(ticket.price)}/ea</button>
            </div>
        </li>
    </div>
)

export default EventTicketsIndexItem;