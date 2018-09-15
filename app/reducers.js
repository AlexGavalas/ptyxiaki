import { combineReducers } from 'redux-immutable';

import loginReducer from 'containers/Login/reducer';

// Initial routing state
const routeInitialState = {};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
  return combineReducers({
    user: loginReducer,
    users: loginReducer,
    newUser: loginReducer,
    ...injectedReducers,
  });
}
