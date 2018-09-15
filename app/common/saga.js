import { call, put, select, takeLatest } from 'redux-saga/effects';

import * as api from 'common/apiCalls';
import * as C from 'common/constants';
import { fetchUserInfo, setUserInfo, setAllUsers, setAllCourses } from 'common/actions';

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

function * createCurriculum(action) {
  yield call(api.createCurriculum, action.data);
}

function * getAllCourses() {

  const response = yield call(api.getAllCourses);

  if (!response.data.error) {

    yield put(setAllCourses(response.data));
  }
}

export default function* watcher() {
  yield takeLatest([C.AUTH_USER], authenticateUser);
  yield takeLatest([C.FETCH_USER_INFO], setUser);
  yield takeLatest([C.FETCH_ALL_USERS], fetchAllUsers);
  yield takeLatest([C.CREATE_USER], createUser);
  yield takeLatest([C.UPDATE_USER], updateUser);
  yield takeLatest([C.DELETE_USER], deleteUser);
  yield takeLatest([C.CREATE_CURRICULUM], createCurriculum);
  yield takeLatest([C.GET_ALL_COURSES], getAllCourses);
}
