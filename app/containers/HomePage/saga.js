import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as apis from './apis';

import { FETCH_USER_INFO, SEND_LOGIN } from './constants';

function* fetchUserInfo() {
  const response = yield call(apis.fetchUserInfo);
  console.log(response);
}

function* sendLoginInfo(data) {
  console.log(data);
  const response = yield call(apis.sendLoginInfo);
  console.log(response);
}

export default function* watcher() {
  yield takeLatest([FETCH_USER_INFO], fetchUserInfo);
  yield takeLatest([SEND_LOGIN], sendLoginInfo);
}
