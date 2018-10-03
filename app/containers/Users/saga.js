import { takeLatest } from 'redux-saga/effects';

import * as C from './constants';
import * as GEN from './generators';

export default function * watcher () {
  yield takeLatest([C.GET_ALL_USERS], GEN.getAllUsers);
  yield takeLatest([C.CREATE_USER], GEN.createUser);
  yield takeLatest([C.UPDATE_USER], GEN.updateUser);
  yield takeLatest([C.DELETE_USER], GEN.deleteUser);
}
