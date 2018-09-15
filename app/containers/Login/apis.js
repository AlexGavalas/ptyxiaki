import axios from 'axios';

export function authenticateUser(data) {
  return axios.post('/login', data);
}

export function fetchUserInfo() {
  return axios.get('/user');
}

export function fetchAllUsers() {
  return axios.get('/allUsers');
}
