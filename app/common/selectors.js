export const selectUser = (state) => state.get('app').username;

export const selectAllCourses = (state) => state.get('app').courses;

export const selectCourseToEdit = (state) => state.get('app').courseToEdit;

export const selectCurriculumName = (state) => state.get('app').curriculum;

export const selecteCoursesToName = (state) => state.get('app').coursesToName;

export const selectCurriculums = (state) => state.get('app').curriculums;

export const selectCurriculumToAssign = (state) => state.get('app').curriculumToAssign;

export const selectCoursesToAssign = (state) => state.get('app').coursesToAssign;

export const selectAllProfessors = (state) => state.get('app').professors;

export const selectProfessorToEdit = (state) => state.get('app').professorToEdit;

export const selectCurriculumInfo = (state) => state.get('app').curriculumInfo;

export const selectAllRoles = (state) => state.get('app').roles;

export const selectRole = (state) => state.get('app').roleToEdit;

export const selectCurToEdit = (state) => state.get('app').curToEdit;

export const selectAvailableCourses = (state) => state.get('app').availableCourses;
