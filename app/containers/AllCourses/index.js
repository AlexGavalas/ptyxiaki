import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table } from 'react-bootstrap';

import { getAllCourses } from 'common/actions';
import { selectAllCourses } from 'common/selectors';

class AllCourses extends React.Component {

  componentDidMount() {

    this.props.dispatch(getAllCourses());
  }

  render() {
    const { courses } = this.props;
    console.log(courses);
    return (
      <h1>HELLO</h1>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = createStructuredSelector({
  courses: selectAllCourses,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AllCourses);
