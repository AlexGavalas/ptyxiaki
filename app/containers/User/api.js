import axios from 'axios';;

export function createUser(data) {
  return axios.post('/createUser', data);
}

export function updateUser(data) {
  return axios.post('/updateUser', data);
}

export function deleteUser(username) {
  return axios.post('/deleteUser', { data: username });
}
