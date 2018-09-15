import {
  SET_USER_INFO,
  SET_ALL_USERS,
  ADD_USER_TO_EDIT,
} from 'common/constants';

const initialState = {
  username: null,
  users: null,
  newUser: null,
};

function reducer(state = initialState, action) {

  switch (action.type) {

    case SET_USER_INFO:
      return {
        ...state,
        username: action.data.username,
      };

    case SET_ALL_USERS:
      return {
        ...state,
        users: action.users
      };

    case ADD_USER_TO_EDIT:
      return {
        ...state,
        newUser: action.user,
      };

    default:
      return state;
  }
}

export default reducer;
