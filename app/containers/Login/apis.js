import axios from 'axios';

export function fetchUserInfo(data) {
  return axios.post('/user',data);
}
