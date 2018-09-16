import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table } from 'react-bootstrap';

import { getAllCourses, addCourseToEdit } from 'common/actions';
import { selectAllCourses } from 'common/selectors';

class AllCourses extends React.Component {

  componentDidMount() {

    this.props.dispatch(getAllCourses());
  }

  edit = (course) => {

    this.props.dispatch(addCourseToEdit(course));

    this.props.history.push('/createCourse');
  }

  render() {

    const { courses } = this.props;

    if (!courses) return null;

    const headers = ['name', 'semester'];

    return (
      <div>
        <Table>
          <thead>
            <tr>
              {headers.map((header) => (<th key={header}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr onClick={() => this.edit(course)} key={course._id}>
                {headers.map((header, i) => (<td key={course._id + i}>{course[header]}</td>))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = createStructuredSelector({
  courses: selectAllCourses,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AllCourses);
