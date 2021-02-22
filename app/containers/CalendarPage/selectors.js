import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the calendarPage state domain
 */
const selectGlobal = state => state.global || initialState;

/**
 * Default selector used by CalendarPage
 */

const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    substate => substate.user,
  );

export { makeSelectUser };
