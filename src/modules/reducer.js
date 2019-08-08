import * as ACTIONS from './constants';

const initialState = {
  selectedEvent: null,
  events: [], // по-хорошему, можно сделать его объектом, но как правило используются именно массивы
  currentWeek: (new Date()).getTime(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SELECT_EVENT:
      return {
        ...state,
        selectedEvent: state.selectedEvent !== action.payload ? action.payload : null,
      };
    case ACTIONS.ADD_EVENT:
      return {
        ...state,
        events: state.events.includes(action.payload) ?
          state.events.map(event => event === action.payload ? action.payload : event) :
          [
            ...state.events,
            action.payload,
          ],
      }
    case ACTIONS.DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
