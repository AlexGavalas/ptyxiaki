import * as C from 'common/constants';

const initialState = {
  username: null,
  users: null,
  newUser: null,
  courses: null,
};

function reducer(state = initialState, action) {

  switch (action.type) {

    case C.SET_USER_INFO:
      return {
        ...state,
        username: action.data.username,
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

    default:
      return state;
  }
}

export default reducer;
