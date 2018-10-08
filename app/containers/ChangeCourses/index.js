import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table } from 'react-bootstrap';

import { selectCurToEdit, selectAvailableCourses } from 'common/selectors';
import { getALlExceptTheseCourses } from 'common/actions';

class ChangeCourses extends React.Component {

  componentDidMount() {

      this.props.dispatch(getALlExceptTheseCourses([]));
  }

  render() {

    console.log(this.props);

    const { curToEdit, availableCourses } = this.props;

    if (!curToEdit || !availableCourses) return null;

    const coursesInCur = availableCourses.filter(f => curToEdit.courses.includes(f._id));

    const coursesOutOfCur = availableCourses.filter(f => !curToEdit.courses.includes(f._id));

    

    return null;
  }
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = createStructuredSelector({
  curToEdit: selectCurToEdit,
  availableCourses: selectAvailableCourses,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ChangeCourses);
