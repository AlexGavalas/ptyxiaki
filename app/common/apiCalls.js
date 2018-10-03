import axios from 'axios';

// Login
export const authenticateUser = (data) => axios.post('/login', data);
export const fetchUserInfo = () => axios.get('/user');

// Curriculum
export const getCurriculums = () => axios.get('/getCurriculums');
export const createCurriculum = (data) => axios.post('/createCurriculum', data);

// Courses
export const getAllCourses = () => axios.get('/getAllCourses');
export const setCourse = (data) => axios.post('/setCourse', data);
export const updateCourse = (data) => axios.post('/updateCourse', data);
export const deleteCourse = (data) => axios.post('/deleteCourse', data);
export const fetchCoursesForOneCurriculum = (cur) => axios.post('/fetchCoursesForOneCurriculum', { data: cur });
export const setProfessorToCourse = (data) => axios.post('/setProfessorToCourse', data);
export const removeProfFromCourse = (data) => axios.post('/removeProfFromCourse', data);

// Professors
export const getAllProfessors = () => axios.get('/getAllProfessors');
export const createProfessor = (data) => axios.post('/createProfessor', data);
export const updateProfessor = (data) => axios.post('/updateProfessor', data);
export const deleteProfessor = (data) => axios.post('/deleteProfessor', data);

// Roles
export const createRole = (data) => axios.post('/newRole', data);
export const fetchAllRoles = () => axios.get('/fetchAllRoles');
export const updateRole = (data) => axios.post('/updateRole', data);
export const deleteRole = (data) => axios.post('/deleteRole', data);
