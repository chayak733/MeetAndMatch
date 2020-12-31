import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddMeetingPage
 */

const selectGlobal = state => state.global || initialState;

const selectMaleParticipants = () =>
  createSelector(
    selectGlobal,
    substate =>
      substate.participant &&
      substate.participant.filter(participant => participant.gender === 'male'),
  );

const selectFemaleParticipants = () =>
  createSelector(
    selectGlobal,
    substate =>
      substate.participant &&
      substate.participant.filter(
        participant => participant.gender === 'female',
      ),
  );

export { selectMaleParticipants, selectFemaleParticipants };
