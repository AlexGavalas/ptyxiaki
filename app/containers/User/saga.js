import { call, put, select, takeLatest } from 'redux-saga/effects';

import * as api from './api';
import { CREATE_USER } from './constants';

function * createUser(action) {
  yield call(api.createUser, action.data);
}

export default function* watcher() {
  yield takeLatest([CREATE_USER], createUser);
}
