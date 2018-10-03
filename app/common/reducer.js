import * as C from 'common/constants';

const initialState = {
  username: null,
};

function reducer(state = initialState, action) {

  switch (action.type) {

    case C.SET_USER_INFO:
      return {
        ...state,
        username: action.data,
      };

    case C.SET_ALL_USERS:
      return {
        ...state,
        users: action.users
      };

    case C.ADD_USER_TO_EDIT:
      return {
        ...state,
        newUser: action.user,
      };

    case C.SET_ALL_COURSES:
      return {
        ...state,
        courses: action.data,
      };

    case C.ADD_COURSE_TO_EDIT:
      return {
        ...state,
        courseToEdit: action.data,
      };

    case C.SET_CURRICULUM_NAME:
      return {
        ...state,
        curriculum: action.data,
      };

    case C.SET_COURSES_TO_NAME:
      return {
        ...state,
        coursesToName: action.data,
      };

    case C.SET_CURRICULUMS:
      return {
        ...state,
        curriculums: action.data,
      };

    case C.SET_CURRICULUM_TO_ASSIGN:
      return {
        ...state,
        curriculumToAssign: action.data,
      };

    case C.SET_COURSES_TO_ASSIGN:
      return {
        ...state,
        coursesToAssign: action.data.courses,
        curriculumInfo: { title: action.data.title, curID: action.data._id },
      };

    case C.SET_ALL_PROFESSORS:
      return {
        ...state,
        professors: action.data,
      };

    case C.EDIT_PROFESSOR:
      return {
        ...state,
        professorToEdit: action.data,
      };

    case C.SET_ALL_ROLES:
      return {
        ...state,
        roles: action.data,
      };

    case C.ADD_ROLE_TO_EDIT:
      return {
        ...state,
        roleToEdit: action.data,
      };

    default:
      return state;
  }
}

export default reducer;
