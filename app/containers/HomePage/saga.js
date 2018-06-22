import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_USER_INFO } from './constants';

export function* fetchUserInfo() {
  const response = yield axios.get('user');
  console.log(response);
}

export default function* githubData() {
  yield takeLatest(FETCH_USER_INFO, fetchUserInfo);
}
