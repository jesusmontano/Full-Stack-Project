import React from 'react'
import { Link } from 'react-router-dom';

const EventTicketsIndexItem = ({ ticket, props }) => (
    <div>
        <li className="event-tickets-index-item-li">
            <div>
                Section {ticket.section} · Row {ticket.row}
            </div>
            <div>
                <Link to={`/checkout/${ticket.id}`}>
                    <button className="buy-button-ticket">${Math.trunc(ticket.price)}/ea</button>
                </Link>
            </div>
        </li>
    </div>
)

export default EventTicketsIndexItem;