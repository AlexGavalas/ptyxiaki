import * as C from 'common/constants';

// naming convention
// get(All)<Item>
// set(All)<Item>
// create<Item>
// update<Item>
// delete<Item>

// Login
export const authenticateUser = (data) => ({ type: C.AUTH_USER, data });
export const fetchUserInfo = () => ({ type: C.FETCH_USER_INFO });
export const setUserInfo = (data) => ({ type: C.SET_USER_INFO, data });

// Curriculum
export const setCurriculumName = (data) => ({ type: C.SET_CURRICULUM_NAME, data });
export const createCurriculum = (data) => ({ type: C.CREATE_CURRICULUM, data });
export const getCurriculums = () => ({ type: C.GET_CURRICULUMS });
export const setCurriculums = (data) => ({ type: C.SET_CURRICULUMS, data });
export const setCurriculumToAssign = (data) => ({ type: C.SET_CURRICULUM_TO_ASSIGN, data });
export const setCurriculumToEdit = (data) => ({ type: C.SET_CURRICULUM_TO_EDIT, data });
export const updateCurriculum = (data) => ({ type: C.UPDATE_CURRICULUM, data });

// Courses
export const getAllCourses = () => ({ type: C.GET_ALL_COURSES });
export const setAllCourses = (data) => ({ type: C.SET_ALL_COURSES, data });
export const setCourse = (data) => ({ type: C.SET_COURSE, data });
export const addCourseToEdit = (data) => ({ type: C.ADD_COURSE_TO_EDIT, data });
export const setCoursesToName = (data) => ({ type: C.SET_COURSES_TO_NAME, data });
export const updateCourse = (data) => ({ type: C.UPDATE_COURSE, data });
export const fetchCoursesForOneCurriculum = (data) => ({ type: C.FETCH_COURSES_FOR_ONE_CURRICULUM, data });
export const setCoursesToAssign = (data) => ({ type: C.SET_COURSES_TO_ASSIGN, data });
export const deleteCourse = (data) => ({ type: C.DELETE_COURSE, data });
export const setProfessorToCourse = (data) => ({ type: C.SET_PROFESSOR_TO_COURSE, data });
export const removeProfFromCourse = (data) => ({ type: C.REMOVE_PROF_FROM_COURSE, data });
export const getALlExceptTheseCourses = (data) => ({ type: C.GET_ALL_EXCEPT_THESE_COURSES, data });
export const setAllAvailableCourses = (data) => ({ type: C.SET_ALL_AVAILABLE_COURSES, data });

// Professors
export const getAllProfessors = () => ({ type: C.GET_ALL_PROFESSORS });
export const setAllProfessors = (data) => ({ type: C.SET_ALL_PROFESSORS, data });
export const createProfessor = (data) => ({ type: C.CREATE_PROFESSOR, data });
export const editProfessor = (data) => ({ type: C.EDIT_PROFESSOR, data });
export const updateProfessor = (data) => ({ type: C.UPDATE_PROFESSOR, data });
export const deleteProfessor = (data) => ({ type: C.DELETE_PROFESSOR, data });

//Roles
export const createRole = (data) => ({ type: C.CREATE_ROLE, data });
export const fetchAllRoles = () => ({ type: C.FETCH_ALL_ROLES });
export const setAllRoles = (data) => ({ type: C.SET_ALL_ROLES, data });
export const addRoleToEdit = (data) => ({ type: C.ADD_ROLE_TO_EDIT, data });
export const updateRole = (data) => ({ type: C.UPDATE_ROLE, data });
export const deleteRole = (data) => ({ type: C.DELETE_ROLE, data });
