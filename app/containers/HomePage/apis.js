import axios from 'axios';

export function fetchUserInfo() {
  return axios.get('http://localhost:3000/user');
}
