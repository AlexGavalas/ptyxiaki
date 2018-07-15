import {
  CHANGE_USERNAME,
  FETCH_USER_INFO,
  SEND_LOGIN,
} from './constants';

export const changeUsername = (name) => ({
  type: CHANGE_USERNAME,
  name,
});

export const fetchUserInfo = () => ({
  type: FETCH_USER_INFO,
});

export const sendLoginInfo = (data) => ({
  type: SEND_LOGIN,
  data,
});
