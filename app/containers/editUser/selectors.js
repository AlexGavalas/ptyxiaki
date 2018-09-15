import { createSelector } from 'reselect';

export const selectAllUsers = (state) => state.get('users').users;

export const makeSelectAllUsers = createSelector(
  selectAllUsers,
  (substate) => substate.users,
);
