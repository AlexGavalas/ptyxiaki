import { call, put, select, takeLatest } from 'redux-saga/effects';

import * as api from 'common/apiCalls';
import { AUTH_USER, FETCH_USER_INFO, FETCH_ALL_USERS, CREATE_USER, UPDATE_USER, DELETE_USER } from 'common/constants';
import { fetchUserInfo, setUserInfo, setAllUsers } from 'common/actions';

function * authenticateUser(args) {

  yield call(api.authenticateUser, args.data);

  yield put(fetchUserInfo());
}

function * setUser() {

  const response = yield call(api.fetchUserInfo);

  if (!response.data.error) {

    yield put(setUserInfo(response.data));
  }
}

function * fetchAllUsers() {

  const response = yield call(api.fetchAllUsers);

  if (!response.data.error) {

      yield put(setAllUsers(response.data));
  }
}

function * createUser(action) {
  yield call(api.createUser, action.data);
}

function * updateUser(action) {
  yield call(api.updateUser, action.user);
}

function * deleteUser(action) {
  yield call(api.deleteUser, action.username);
}

export default function* watcher() {
  yield takeLatest([AUTH_USER], authenticateUser);
  yield takeLatest([FETCH_USER_INFO], setUser);
  yield takeLatest([FETCH_ALL_USERS], fetchAllUsers);
  yield takeLatest([CREATE_USER], createUser);
  yield takeLatest([UPDATE_USER], updateUser);
  yield takeLatest([DELETE_USER], deleteUser);
}
