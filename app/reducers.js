import { combineReducers } from 'redux-immutable';

import reducer from 'common/reducer';

export const createReducer = () => combineReducers({ app: reducer });
