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
import editUser from '../editUser';
import CreateCourse from '../CreateCourse';
import CreateCurriculum from '../CreateCurriculum';
import AllCourses from '../AllCourses';

import { selectUser } from 'common/selectors';
import { fetchUserInfo } from 'common/actions';

class Home extends React.Component {

  componentDidMount() {

    this.props.dispatch(fetchUserInfo());
  }

  render() {

    const { user } = this.props;

    return user == null ? (
      <Login />
    ) : (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Panel} />
            <Route exact path="/home" component={Panel} />
            <Route exact path="/createCurriculum" component={CreateCurriculum} />
            <Route exact path="/createCourse" component={CreateCourse} />
            <Route exact path="/createUser" component={createUser} />
            <Route exact path="/editUser" component={editUser} />
            <Route exact path="/courses" component={AllCourses} />
          </Switch>
        </Router>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);
