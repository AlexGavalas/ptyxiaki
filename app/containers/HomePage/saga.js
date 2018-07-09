import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as apis from './apis';

import { FETCH_USER_INFO } from './constants';

function* fetchUserInfo() {
  const response = yield call(apis.fetchUserInfo);
  console.log(response);
}

export default function* watcher() {
  yield takeLatest([FETCH_USER_INFO], fetchUserInfo);
}
