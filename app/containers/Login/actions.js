import {FETCH_USER_INFO,SET_USER_INFO} from './constants'


export const fetchUserInfo = (data) => ({
  type: FETCH_USER_INFO,
  data,
});

export const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  data
});
