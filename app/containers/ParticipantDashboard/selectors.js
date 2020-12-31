import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the participantDashboard state domain
 */

const selectParticipantDashboardDomain = state => state.global || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ParticipantDashboard
 */

const makeSelectParticipants = () =>
  createSelector(
    selectParticipantDashboardDomain,
    substate => substate.participants,
  );

export default makeSelectParticipants;
export { selectParticipantDashboardDomain };
