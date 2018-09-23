import axios from 'axios';

// Login calls

export const authenticateUser = (data) => axios.post('/login', data);
export const fetchUserInfo = () => axios.get('/user');
export const fetchAllUsers = () => axios.get('/allUsers');

// User calls

export const createUser = (data) => axios.post('/createUser', data);
export const updateUser = (data) => axios.post('/updateUser', data);
export const deleteUser = (username) => axios.post('/deleteUser', { data: username });

// Curriculum calls

export const getCurriculums = () => axios.get('/getCurriculums');
export const createCurriculum = (data) => axios.post('/createCurriculum', data);

// Courses

export const getAllCourses = () => axios.get('/getAllCourses');
export const setCourse = (data) => axios.post('/setCourse', data);
export const updateCourse = (data) => axios.post('/updateCourse', data);
export const fetchCoursesForOneCurriculum = (cur) => axios.post('/fetchCoursesForOneCurriculum', { data: cur });

// Professors

export const getAllProfessors = () => axios.get('/getAllProfessors');
export const createProfessor = (data) => axios.post('/createProfessor', data);
export const updateProfessor = (data) => axios.post('/updateProfessor', data);
export const deleteProfessor = (data) => axios.post('/deleteProfessor', data);
