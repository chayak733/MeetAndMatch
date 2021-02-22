import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the adminDashboard state domain
 */

const selectAdminDashboardDomain = state =>
  state.global || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AdminDashboard
 */

const makeSelectUser = () =>
  createSelector(
    selectAdminDashboardDomain,
    substate => substate.user,
  );

const makeSelectMatchmakers = () =>
  createSelector(
    selectAdminDashboardDomain,
    substate => substate.matchmakers,
  );

export default makeSelectUser;
export { selectAdminDashboardDomain, makeSelectMatchmakers };
