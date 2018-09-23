export const selectAllUsers = (state) => state.get('app').users;

export const selectUser = (state) => state.get('app').username;

export const selectNewUser = (state) => state.get('app').newUser;

export const selectAllCourses = (state) => state.get('app').courses;

export const selectCourseToEdit = (state) => state.get('app').courseToEdit;

export const selectCurriculumName = (state) => state.get('app').curriculum;

export const selecteCoursesToName = (state) => state.get('app').coursesToName;

export const selectCurriculums = (state) => state.get('app').curriculums;

export const selectCurriculumToAssign = (state) => state.get('app').curriculumToAssign;

export const selectCoursesToAssign = (state) => state.get('app').coursesToAssign;

export const selectAllProfessors = (state) => state.get('app').professors;
