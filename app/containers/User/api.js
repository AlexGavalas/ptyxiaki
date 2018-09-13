import axios from 'axios';;

export function createUser(data) {
  return axios.post('/createUser', data);
}
