import axios from 'axios';

export const getAllUsers = () => axios.get('/allUsers');
export const createUser = (data) => axios.post('/createUser', data);
export const updateUser = (data) => axios.post('/updateUser', data);
export const deleteUser = (data) => axios.post('/deleteUser', data);
