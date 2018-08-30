import {
  AUTH_USER,
  FETCH_USER_INFO,
  SET_USER_INFO
} from './constants'

export const authenticateUser = (data) => ({
  type: AUTH_USER,
  data,
});

export const fetchUserInfo = () => ({
  type: FETCH_USER_INFO
});

export const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  data
});
