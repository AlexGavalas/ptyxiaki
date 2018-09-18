import { call, put } from 'redux-saga/effects';

import * as api from 'common/apiCalls';
import * as ACTIONS from 'common/actions';

export function * authenticateUser (action) {

  yield call(api.authenticateUser, action.data);

  yield put(ACTIONS.fetchUserInfo());
}

export function * setUser () {

  const response = yield call(api.fetchUserInfo);

  if (!response.data.error) {

    yield put(ACTIONS.setUserInfo(response.data));
  }
}

export function * fetchAllUsers () {

  const response = yield call(api.fetchAllUsers);

  if (!response.data.error) {

      yield put(ACTIONS.setAllUsers(response.data));
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

export function * getCurriculums () {

  const response = yield call(api.getCurriculums);

  if (!response.data.error) {

    yield put(ACTIONS.setCurriculums(response.data));
  }
}

export function * getAllCourses () {

  const response = yield call(api.getAllCourses);

  if (!response.data.error) {

    yield put(ACTIONS.setAllCourses(response.data));
  }
}

export function * updateCourse (action) {
  yield call(api.updateCourse, action.data);
}

export function * setCourse (action) {
  yield call(api.setCourse, action.data);
}
