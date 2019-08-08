import * as ACTIONS from './constants';

export const addEvent = (event) => {
  return {
    type: ACTIONS.ADD_EVENT,
    payload: event,
  }
};

export const selectEvent = (eventId) => {
  return {
    type: ACTIONS.SELECT_EVENT,
    payload: eventId,
  };
};

export const deleteEvent = (eventId) => {
  return {
    type: ACTIONS.DELETE_EVENT,
    payload: eventId,
  }
};
