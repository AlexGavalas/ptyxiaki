import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table, Button } from 'react-bootstrap';

import { selecteCoursesToName, selectCurriculumName } from 'common/selectors';
import { createCurriculum } from 'common/actions';

class NameCourses extends React.Component {

  state = {};

  componentDidMount() {

    const courses = {};

    this.props.coursesToName.forEach((course) => courses[course._id] = course);

    this.setState({ courses });
  }

  handleChange = (event) => {

    const { name, value } = event.target;

    const { courses } = this.state;

    courses[name].maidenName = value;

    this.setState({ courses });
  }

  handleSubmit = () => {

    const { courses } = this.state;

    this.props.dispatch(createCurriculum({ title: this.props.curriculumName, courses }));

    this.props.history.push('/');
  }

  render() {

    const { coursesToName } = this.props;

    const headers = ['Generic Name', 'Specific Name'];

    if (!coursesToName) return null;

    return (
      <div className="Login">
        <Table>
          <thead>
            <tr>
              {headers.map((header) => (<th key={header}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {coursesToName.map((course) => (
              <tr key={course._id}>
                <td>{course.name}</td>
                <td><input onChange={this.handleChange} name={course._id} defaultValue={course.maidenName || course.name}/></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
          block
          onClick={this.handleSubmit}
          bsSize="large"
          bsStyle="primary">
            Καταχώρηση
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = createStructuredSelector({
  coursesToName: selecteCoursesToName,
  curriculumName: selectCurriculumName,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(NameCourses);
