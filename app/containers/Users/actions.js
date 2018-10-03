import * as C from './constants';

export const getAllUsers = () => ({ type: C.GET_ALL_USERS });
export const setAllUsers = (data) => ({ type: C.SET_ALL_USERS, data });
export const createUser = (data) => ({ type: C.CREATE_USER, data });
export const updateUser = (data) => ({ type: C.UPDATE_USER, data });
export const deleteUser = (data) => ({ type: C.DELETE_USER, data });

export const addUserToEdit = (data) => ({ type: C.ADD_USER_TO_EDIT, data });
