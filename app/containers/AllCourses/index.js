import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table, Button } from 'react-bootstrap';

import { getAllCourses, addCourseToEdit, setCoursesToName } from 'common/actions';
import { selectAllCourses, selectCurriculumName } from 'common/selectors';

class AllCourses extends React.Component {

  state = {
    selected: {}
  }

  componentDidMount() {

    this.props.dispatch(getAllCourses());
  }

  edit = (course) => {

    this.props.dispatch(addCourseToEdit(course));

    this.props.history.push('/createCourse');
  }

  selectCourse = (index) => {

    const { selected } = this.state;

    selected[index] = selected[index] ? !selected[index] : true;

    this.setState({ selected });
  }

  handleSubmit = (event) => {

    event.preventDefault();

    const { selected } = this.state;

    const courses = [];

    Object.keys(selected).forEach((key) => {
      if (selected[key]) courses.push(this.props.courses[key]);
    });

    this.props.dispatch(setCoursesToName(courses));

    this.props.history.push('/nameCourses');
  }

  render() {

    const { courses, curriculum } = this.props;

    if (!courses) return null;

    let selectMode = false;

    if (curriculum) selectMode = true;

    const headers = ['name', 'semester'];

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <Table>
            <thead>
              <tr>
                {headers.map((header) => (<th key={header}>{header}</th>))}
              </tr>
            </thead>
            <tbody>
              {courses.map((course, i) => (
                <tr onClick={selectMode ? () => this.selectCourse(i) : () => this.edit(course)} key={course._id} className={this.state.selected[i] ? 'selected' : ''}>
                  {headers.map((header, i) => (<td key={course._id + i}>{course[header]}</td>))}
                </tr>
              ))}
            </tbody>
          </Table>
          <Button
            block
            bsSize="large"
            bsStyle="primary"
            type="submit">
              Επόμενο
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = createStructuredSelector({
  courses: selectAllCourses,
  curriculum: selectCurriculumName,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AllCourses);
