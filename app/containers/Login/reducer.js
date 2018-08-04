// import {
//
// } from './constants';

const initialState = {
  username: '',
  password: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        username: action.user.username,
      };
    default:
      return state;
  }
}

export default loginReducer;
