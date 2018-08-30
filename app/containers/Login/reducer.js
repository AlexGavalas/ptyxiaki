import {
  SET_USER_INFO,
} from './constants';

const initialState = {
  username: null
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        username: action.data.username,
      };
    default:
      return state;
  }
}

export default loginReducer;
