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

import Login from '../Login';
import Header from '../Header';
import Panel from '../Admin';
import createUser from '../User';
import CreateCourse from '../CreateCourse/index';
import CreateCurriculum from '../CreateCurriculum/index';
import { selectUser } from './selectors';
import { fetchUserInfo } from '../Login/actions';

class Home extends React.Component {

  componentDidMount() {

    this.props.dispatch(fetchUserInfo());
  }

  render() {

    const { user } = this.props;

    return user === undefined ? (
      <Login />
    ) : (
      <Router>
        <Switch>
          <Route exact path="/" component={Panel} />
          <Route exact path="/home" component={Panel} />
          <Route exact path="/createCurriculum" component={CreateCurriculum} />
          <Route exact path="/createCourse" component={CreateCourse} />
          <Route exact path="/createUser" component={createUser} />
        </Switch>
      </Router>
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
