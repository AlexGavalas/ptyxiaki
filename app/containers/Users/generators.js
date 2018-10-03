import { call, put } from 'redux-saga/effects';

import * as api from './apiCalls';
import * as ACTIONS from './actions';

export function * getAllUsers () {

  const response = yield call(api.getAllUsers);

  yield put(ACTIONS.setAllUsers(response.data));
}

export function * createUser (action) {

  yield call(api.createUser, action.data);
}

export function * updateUser (action) {

  yield call(api.updateUser, action.data);
}

export function * deleteUser (action) {

  yield call(api.deleteUser, action.data);
}
