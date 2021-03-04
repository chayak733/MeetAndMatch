import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the participantsDashboard state domain
 */

const selectGlobal = state => state.global || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ParticipantsDashboard
 */

const SelectStatisticsParticipants = () =>
  createSelector(
    selectGlobal,
    substate => substate.statistics,
  );

export default SelectStatisticsParticipants;
export { selectGlobal };
