export const selectAllUsers = (state) => state.get('user').users;

export const selectUser = (state) => state.get('user').username;

export const selectNewUser = (state) => state.get('user').newUser;

export const selectAllCourses = (state) => state.get('user').courses;

export const selectCourseToEdit = (state) => state.get('user').courseToEdit;

export const selectCurriculumName = (state) => state.get('user').curriculum;

export const selecteCoursesToName = (state) => state.get('user').coursesToName;

export const selectCurriculums = (state) => state.get('user').curriculums;

export const selectCurriculumToAssign = (state) => state.get('user').curriculumToAssign;

export const selectCoursesToAssign = (state) => state.get('user').coursesToAssign;
