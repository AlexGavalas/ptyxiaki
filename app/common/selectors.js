export const selectAllUsers = (state) => state.get('user').users;

export const selectUser = (state) => state.get('user').username;

export const selectNewUser = (state) => state.get('user').newUser;

export const selectAllCourses = (state) => state.get('user').courses;
