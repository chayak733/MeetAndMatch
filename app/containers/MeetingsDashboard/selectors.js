import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the meetingsDashboard state domain
 */

const selectMeetingsDashboardDomain = state => state.global || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MeetingsDashboard
 */

const makeSelectMeetings = () =>
  createSelector(
    selectMeetingsDashboardDomain,
    substate => substate, meeting,
  );

export default makeSelectMeetings;
export { selectMeetingsDashboardDomain };
