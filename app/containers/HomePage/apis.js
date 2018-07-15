import axios from 'axios';

export function fetchUserInfo() {
  return axios.get('/user');
}

export function sendLoginInfo(data) {
  return axios.post('/sendLoginInfo', data);
}
