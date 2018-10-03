import * as C from './constants';

export default function reducer(state = {}, action) {

  switch (action.type) {

    case C.SET_ALL_USERS:
      return {
        ...state,
        users: action.data,
      };

    case C.ADD_USER_TO_EDIT:
      return {
        ...state,
        newUser: action.data,
      };

    default:
      return state;
  }
};
