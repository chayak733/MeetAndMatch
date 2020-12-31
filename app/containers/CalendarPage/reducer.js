/*
 *
 * CalendarPage reducer
 *
 */
import { DEAFAULT_ACTION } from './constants';

export const initialState = [];

/* eslint-disable default-case, no-param-reassign */
const calendarPageReducer = (state = initialState, action) => {
  if (action.type === DEAFAULT_ACTION) {
    return state;
  }
  return state;
};

export default calendarPageReducer;
