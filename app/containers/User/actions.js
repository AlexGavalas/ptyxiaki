import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from './constants';

export const postUser = (data) => ({
  type: CREATE_USER,
  data,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});

export const deleteUser = (username) => ({
  type: DELETE_USER,
  username,
})
