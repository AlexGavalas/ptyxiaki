import {
  CHANGE_USERNAME,
  FETCH_USER_INFO,
} from './constants';

export const changeUsername = (name) => ({
  type: CHANGE_USERNAME,
  name,
});

export const fetchUserInfo = () => ({
  type: FETCH_USER_INFO,
});
