import {
  RECEIVE_ALL_TICKETS,
  RECEIVE_TICKET,
  REMOVE_TICKET,
} from '../actions/ticket_actions';
import merge from 'lodash/merge';

const TicketsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TICKETS:
      return merge({}, oldState, action.tickets);
    case RECEIVE_TICKET:
      return merge({}, oldState, {[action.ticket.id]: action.ticket});
    case REMOVE_TICKET:
      let newState = merge({}, oldState);
      delete newState[action.ticketId];
      return newState;
    default:
      return oldState;
  }
};

export default TicketsReducer;