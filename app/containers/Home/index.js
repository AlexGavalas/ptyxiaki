import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';

import Login from '../Login';
import Panel from '../Admin';
import createUser from '../User';
import editUser from '../editUser';
import CreateCourse from '../CreateCourse';
import CreateCurriculum from '../CreateCurriculum';
import AllCourses from '../AllCourses';
import NameCourses from '../NameCourses';
import AllCurriculums from '../AllCurriculums';
import CurriculumToAssign from '../curriculumToAssign';
import Professors from '../Professors';

import { selectUser } from 'common/selectors';
import { fetchUserInfo } from 'common/actions';

class Home extends React.Component {

  componentDidMount() {

    this.props.dispatch(fetchUserInfo());
  }

  render() {

    const { user } = this.props;

    if (user == null) return (<Login />);

    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Panel} />
            <Route exact path="/createUser" component={createUser} />
            <Route exact path="/editUser" component={editUser} />
            <Route exact path="/courses" component={AllCourses} />
            <Route exact path="/createCourse" component={CreateCourse} />
            <Route exact path="/createCurriculum" component={CreateCurriculum} />
            <Route exact path="/curriculums" component={AllCurriculums} />
            <Route exact path="/nameCourses" component={NameCourses} />
            <Route exact path="/curriculum" component={CurriculumToAssign} />
            <Route exact path="/professors" component={Professors} />
          </Switch>
        </BrowserRouter>
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
