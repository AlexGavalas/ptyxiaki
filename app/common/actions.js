import * as C from 'common/constants';

// Edit User

export const fetchAllUsers = () => ({ type: C.FETCH_ALL_USERS });

export const setAllUsers = (users) => ({ type: C.SET_ALL_USERS, users });

export const addUserToEdit = (user) => ({ type: C.ADD_USER_TO_EDIT, user });

// Login

export const authenticateUser = (data) => ({ type: C.AUTH_USER, data });

export const fetchUserInfo = () => ({ type: C.FETCH_USER_INFO });

export const setUserInfo = (data) => ({ type: C.SET_USER_INFO, data });

// User

export const postUser = (data) => ({ type: C.CREATE_USER, data });

export const updateUser = (user) => ({ type: C.UPDATE_USER, user });

export const deleteUser = (username) => ({ type: C.DELETE_USER, username });

// Curriculum

export const createCurriculum = (data) => ({ type: C.CREATE_CURRICULUM, data });

// Courses

export const getAllCourses = () => ({ type: C.GET_ALL_COURSES });

export const setAllCourses = (data) => ({ type: C.SET_ALL_COURSES, data });
