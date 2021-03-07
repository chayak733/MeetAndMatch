import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signout state domain
 */

const selectSignoutDomain = state => state.signout || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Signout
 */

const makeSelectSignout = () =>
  createSelector(
    selectSignoutDomain,
    substate => substate,
  );

export default makeSelectSignout;
export { selectSignoutDomain };
