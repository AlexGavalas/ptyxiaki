import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import { createReducer } from './reducers';
import saga from 'common/saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {

  // routerMiddleware: Syncs the location/URL path to the state

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(saga);
  store.runSaga = sagaMiddleware.run;

  return store;
};
