import {
  FETCH_USER_INFO
} from './constants';

// The initial state of the App
const initialState = {
  currentUser: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return {
        ...state,
        user: 'ALEX'
      };
    default:
      return state;
  }
};

export default appReducer;
