import { combineReducers } from 'redux-immutable';

import reducer from 'common/reducer';
import userReducer from 'containers/Users/reducer';

export const createReducer = () => combineReducers({
  app: reducer,
  user: userReducer
});
