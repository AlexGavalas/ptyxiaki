import {
  FETCH_ALL_USERS,
  SET_ALL_USERS,
  ADD_USER_TO_EDIT,
} from './constants';

export const fetchAllUsers = () => ({
  type: FETCH_ALL_USERS
});

export const setAllUsers = (users) => ({
  type: SET_ALL_USERS,
  users
});

export const addUserToEdit = (user) => ({
  type: ADD_USER_TO_EDIT,
  user,
})
