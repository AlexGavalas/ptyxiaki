import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as apis from './apis';

import { AUTH_USER, FETCH_USER_INFO } from './constants';
import { fetchUserInfo, setUserInfo } from './actions';

import { FETCH_ALL_USERS } from '../editUser/constants';
import { setAllUsers } from '../editUser/actions';

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

function * fetchAllUsers() {

  const response = yield call(apis.fetchAllUsers);

  if (!response.data.error) {

      yield put(setAllUsers(response.data));
  }
}

export default function* watcher() {
  yield takeLatest([AUTH_USER], authenticateUser);
  yield takeLatest([FETCH_USER_INFO], setUser);
  yield takeLatest([FETCH_ALL_USERS], fetchAllUsers);
}
