import { call, put, select } from 'redux-saga/effects';

import * as api from 'common/apiCalls';
import { fetchUserInfo, setUserInfo, setAllUsers, setAllCourses } from 'common/actions';

export function * authenticateUser (action) {

  yield call(api.authenticateUser, action.data);

  yield put(fetchUserInfo());
}

export function * setUser () {

  const response = yield call(api.fetchUserInfo);

  if (!response.data.error) {

    yield put(setUserInfo(response.data));
  }
}

export function * fetchAllUsers () {

  const response = yield call(api.fetchAllUsers);

  if (!response.data.error) {

      yield put(setAllUsers(response.data));
  }
}

export function * createUser (action) {
  yield call(api.createUser, action.data);
}

export function * updateUser (action) {
  yield call(api.updateUser, action.user);
}

export function * deleteUser (action) {
  yield call(api.deleteUser, action.username);
}

export function * createCurriculum (action) {
  yield call(api.createCurriculum, action.data);
}

export function * getAllCourses () {

  const response = yield call(api.getAllCourses);

  if (!response.data.error) {

    yield put(setAllCourses(response.data));
  }
}

export function * setCourse (action) {
  yield call(api.setCourse, action.data);
}
