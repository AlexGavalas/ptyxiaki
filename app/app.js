// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import 'styles/index.css';
import 'styles/bootstrap.min.css';
import configureStore from './configureStore';
import Home from 'containers/Home';

const history = createHistory();
const store = configureStore({}, history);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Home />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);
