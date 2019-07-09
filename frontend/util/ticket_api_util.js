export const fetchTickets = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tickets',
  })
);

export const fetchTicket = id => (
  $.ajax({
    method: 'GET',
    url: `api/tickets/${id}`
  })
);

export const createTicket = ticket => (
  $.ajax({
    url: 'api/tickets',
    method: 'POST',
    data: { ticket }
  })
);

export const updateTicket = ticket => (
  $.ajax({
    url: `api/tickets/${ticket.id}`,
    method: 'PATCH',
    data: { ticket }
  })
);

export const deleteTicket = id => (
  $.ajax({
    url: `api/tickets/${id}`,
    method: 'DELETE'
  })
);