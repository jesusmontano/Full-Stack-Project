import * as TicketApiUtil from '../util/ticket_api_util';

export const RECEIVE_ALL_TICKETS = "RECEIVE_ALL_TICKETS";
export const RECEIVE_TICKET = "RECEIVE_TICKET";
export const REMOVE_TICKET = "REMOVE_TICKET";

export const fetchTickets = () => dispatch => (
    TicketApiUtil.fetchTickets().then(tickets => dispatch({type: RECEIVE_ALL_TICKETS, tickets}))
);

export const fetchTicket = (id) => dispatch => (
    TicketApiUtil.fetchTicket(id).then(ticket => dispatch({type: RECEIVE_TICKET, ticket}))
);

export const createTicket = (ticket) => dispatch => (
    TicketApiUtil.createTicket(ticket).then(ticket => dispatch({type: RECEIVE_TICKET, ticket}))
);

export const updateTicket = (ticket) => dispatch => (
    TicketApiUtil.updateTicket(ticket).then(ticket => dispatch({type: RECEIVE_TICKET, ticket}))
);

export const deleteTicket = (id) => dispatch => (
    TicketApiUtil.deleteTicket(id).then(ticket => dispatch({type: REMOVE_TICKET, ticketId: ticket.id }))
);