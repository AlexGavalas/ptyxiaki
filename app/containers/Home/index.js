import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Login from '../Login/index';
import Header from '../Header/index';
import { selectUser } from './selectors';
import { fetchUserInfo } from '../Login/actions';

class Home extends React.Component {

  componentDidMount() {

    this.props.dispatch(fetchUserInfo());
  }

  render() {

    const isLoggedIn = this.props.user ? true : false;

    return isLoggedIn ? (
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/home" component={Header} />
        </Switch>
      </Router>
    ) : (
      <Login />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Home);
