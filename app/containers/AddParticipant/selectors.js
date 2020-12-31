import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addParticipant state domain
 */

const selectAddParticipantDomain = state =>
  state.addParticipant || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddParticipant
 */

const makeSelectAddParticipant = () =>
  createSelector(
    selectAddParticipantDomain,
    substate => substate,
  );

export default makeSelectAddParticipant;
export { selectAddParticipantDomain };
