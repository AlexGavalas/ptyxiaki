import { takeLatest } from 'redux-saga/effects';

import * as C from 'common/constants';
import * as GEN from 'common/generators';

export default function * watcher () {
  yield takeLatest([C.AUTH_USER], GEN.authenticateUser);
  yield takeLatest([C.FETCH_USER_INFO], GEN.setUser);
  yield takeLatest([C.CREATE_CURRICULUM], GEN.createCurriculum);
  yield takeLatest([C.GET_ALL_COURSES], GEN.getAllCourses);
  yield takeLatest([C.SET_COURSE], GEN.setCourse);
  yield takeLatest([C.GET_CURRICULUMS], GEN.getCurriculums);
  yield takeLatest([C.UPDATE_COURSE], GEN.updateCourse);
  yield takeLatest([C.FETCH_COURSES_FOR_ONE_CURRICULUM], GEN.fetchCoursesForOneCurriculum);
  yield takeLatest([C.GET_ALL_PROFESSORS], GEN.getAllProfessors);
  yield takeLatest([C.CREATE_PROFESSOR], GEN.createProfessor);
  yield takeLatest([C.UPDATE_PROFESSOR], GEN.updateProfessor);
  yield takeLatest([C.DELETE_PROFESSOR], GEN.deleteProfessor);
  yield takeLatest([C.DELETE_COURSE], GEN.deleteCourse);
  yield takeLatest([C.SET_PROFESSOR_TO_COURSE], GEN.setProfessorToCourse);
  yield takeLatest([C.REMOVE_PROF_FROM_COURSE], GEN.removeProfFromCourse);
  yield takeLatest([C.CREATE_ROLE], GEN.createRole);
  yield takeLatest([C.FETCH_ALL_ROLES], GEN.fetchAllRoles);
  yield takeLatest([C.UPDATE_ROLE], GEN.updateRole);
  yield takeLatest([C.DELETE_ROLE], GEN.deleteRole);
  yield takeLatest([C.GET_ALL_EXCEPT_THESE_COURSES], GEN.getALlExceptTheseCourses);
  yield takeLatest([C.UPDATE_CURRICULUM], GEN.updateCurriculum);
}
