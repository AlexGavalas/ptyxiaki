import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';

import Login from '../Login';
import Panel from '../Admin';
import CreateCurriculum from '../CreateCurriculum';
import NameCourses from '../NameCourses';
import AllCurriculums from '../AllCurriculums';
import CurriculumToAssign from '../curriculumToAssign';
import CoursePage from '../CoursePage';

import AllCourses from 'containers/Courses/AllCourses';
import EditCourse from 'containers/Courses/EditCourse';
import CreateCourse from 'containers/Courses/CreateCourse';

import AllUsers from 'containers/Users/AllUsers';
import CreateUser from 'containers/Users/CreateUser';
import EditUser from 'containers/Users/EditUser';

import AllProfessors from 'containers/Professors/AllProfessors';
import CreateProfessor from 'containers/Professors/CreateProfessor';
import EditProfessor from 'containers/Professors/EditProfessor';

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

            <Route exact path="/users" component={AllUsers} />
            <Route exact path="/editUser" component={EditUser} />
            <Route exact path="/createUser" component={CreateUser} />

            <Route exact path="/courses" component={AllCourses} />
            <Route exact path="/editCourse" component={EditCourse} />
            <Route exact path="/createCourse" component={CreateCourse} />

            <Route exact path="/professors" component={AllProfessors} />
            <Route exact path="/editProfessor" component={EditProfessor} />
            <Route exact path="/createProfessor" component={CreateProfessor} />

            <Route exact path="/createCurriculum" component={CreateCurriculum} />
            <Route exact path="/curriculums" component={AllCurriculums} />
            <Route exact path="/nameCourses" component={NameCourses} />
            <Route exact path="/curriculum" component={CurriculumToAssign} />
            <Route exact path="/coursePage" component={CoursePage} />
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
