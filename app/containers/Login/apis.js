import axios from 'axios';

export function fetchUserInfo() {
  console.log("esteila to aithma");
  return axios.get('/user');
}
