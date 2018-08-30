import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as apis from './apis';

import { AUTH_USER, FETCH_USER_INFO } from './constants';
import { fetchUserInfo, setUserInfo } from './actions';

function * authenticateUser(args) {

  yield call(apis.authenticateUser, args.data);

  yield put(fetchUserInfo());
}

function * setUser() {

  const response = yield call(apis.fetchUserInfo);

  if (!response.data.error) {

    yield put(setUserInfo(response.data));
  }
}

export default function* watcher() {
  yield takeLatest([AUTH_USER], authenticateUser);
  yield takeLatest([FETCH_USER_INFO], setUser);
}
