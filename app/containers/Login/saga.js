import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as apis from './apis';

import { FETCH_USER_INFO} from './constants';
import {setUserInfo} from './actions';

function* fetchUserInfo(args) {
  const response = yield call(apis.fetchUserInfo,args.data);
  if(response.data['error'] === false){
    // komple login
    yield put(setUserInfo(response.data));
  }
  else {
    // gtp login
  }

}

export default function* watcher() {
  yield takeLatest([FETCH_USER_INFO], fetchUserInfo);
}
