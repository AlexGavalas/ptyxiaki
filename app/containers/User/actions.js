import {
  CREATE_USER,
} from './constants';

export const postUser = (data) => ({
  type: CREATE_USER,
  data,
});
