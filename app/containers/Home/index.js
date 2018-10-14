import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';

import COMPONENTS from './components';

import { selectUser } from 'common/selectors';
import { fetchUserInfo } from 'common/actions';

class Home extends React.Component {

  componentDidMount() {

    this.props.dispatch(fetchUserInfo());
  }

  render() {

    const { user } = this.props;

    if (user === null) return (<COMPONENTS.Login />);

    else if (!user) return null;

    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={COMPONENTS.Panel} user={user} />

            <Route exact path="/users" component={COMPONENTS.AllUsers} />
            <Route exact path="/editUser" component={COMPONENTS.EditUser} />
            <Route exact path="/createUser" component={COMPONENTS.CreateUser} />

            <Route exact path="/courses" component={COMPONENTS.AllCourses} />
            <Route exact path="/editCourse" component={COMPONENTS.EditCourse} />
            <Route exact path="/createCourse" component={COMPONENTS.CreateCourse} />

            <Route exact path="/professors" component={COMPONENTS.AllProfessors} />
            <Route exact path="/editProfessor" component={COMPONENTS.EditProfessor} />
            <Route exact path="/createProfessor" component={COMPONENTS.CreateProfessor} />

            <Route exact path="/allRoles" component={COMPONENTS.AllRoles} />
            <Route exact path="/createRole" component={COMPONENTS.CreateRole} />
            <Route exact path="/editRole" component={COMPONENTS.EditRole} />

            <Route exact path="/editCoursesNameAndCode" component={COMPONENTS.EditCoursesNameAndCode} />
            <Route exact path="/editCur" component={COMPONENTS.ChangeCourses} />
            <Route exact path="/createCurriculum" component={COMPONENTS.CreateCurriculum} />
            <Route exact path="/curriculums" component={COMPONENTS.AllCurriculums} />
            <Route exact path="/editCurriculums" component={COMPONENTS.EditCurriculums} />
            <Route exact path="/nameCourses" component={COMPONENTS.NameCourses} />
            <Route exact path="/curriculum" component={COMPONENTS.CurriculumToAssign} />
            <Route exact path="/coursePage" component={COMPONENTS.CoursePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = () => createStructuredSelector({ user: selectUser });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);
