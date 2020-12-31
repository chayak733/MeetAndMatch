import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the updateParticipant state domain
 */

const selectUpdateParticipantDomain = state =>
  state.updateParticipant || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UpdateParticipant
 */

const makeSelectUpdateParticipant = () =>
  createSelector(
    selectUpdateParticipantDomain,
    substate => substate,
  );

export default makeSelectUpdateParticipant;
export { selectUpdateParticipantDomain };
