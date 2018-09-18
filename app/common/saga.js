import { takeLatest } from 'redux-saga/effects';

import * as C from 'common/constants';
import * as GEN from 'common/generators';

export default function * watcher () {
  yield takeLatest([C.AUTH_USER], GEN.authenticateUser);
  yield takeLatest([C.FETCH_USER_INFO], GEN.setUser);
  yield takeLatest([C.FETCH_ALL_USERS], GEN.fetchAllUsers);
  yield takeLatest([C.CREATE_USER], GEN.createUser);
  yield takeLatest([C.UPDATE_USER], GEN.updateUser);
  yield takeLatest([C.DELETE_USER], GEN.deleteUser);
  yield takeLatest([C.CREATE_CURRICULUM], GEN.createCurriculum);
  yield takeLatest([C.GET_ALL_COURSES], GEN.getAllCourses);
  yield takeLatest([C.SET_COURSE], GEN.setCourse);
  yield takeLatest([C.GET_CURRICULUMS], GEN.getCurriculums);
  yield takeLatest([C.UPDATE_COURSE], GEN.updateCourse);
}
