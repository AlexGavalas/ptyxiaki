import { call, put, select, takeLatest } from 'redux-saga/effects';

import * as api from './api';
import { CREATE_USER, UPDATE_USER, DELETE_USER } from './constants';

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
  yield takeLatest([CREATE_USER], createUser);
  yield takeLatest([UPDATE_USER], updateUser);
  yield takeLatest([DELETE_USER], deleteUser);
}
