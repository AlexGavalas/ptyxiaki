// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Home from 'containers/Home';
import './index.css';
import configureStore from './configureStore';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const dispatch = store.dispatch;
const MOUNT_NODE = document.getElementById('app');


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Home dispatch={dispatch} />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
