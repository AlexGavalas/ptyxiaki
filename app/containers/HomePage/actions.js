import {
  FETCH_USER_INFO,
  SEND_LOGIN,
} from './constants';

export const fetchUserInfo = () => ({
  type: FETCH_USER_INFO,
});

export const sendLoginInfo = (data) => ({
  type: SEND_LOGIN,
  data,
});
