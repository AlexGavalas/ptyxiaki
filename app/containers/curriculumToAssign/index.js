import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table, Button } from 'react-bootstrap';

import { selectCurriculumToAssign, selectCurriculumInfo, selectCoursesToAssign } from 'common/selectors';
import { fetchCoursesForOneCurriculum, addCourseToEdit } from 'common/actions';

class CurriculumToAssign extends React.Component {

  componentDidMount() {

    this.props.dispatch(fetchCoursesForOneCurriculum(this.props.curriculum));
  }

  goToCoursePage = (course) => {

    this.props.dispatch(addCourseToEdit(course));

    this.props.history.push('/coursePage');
  }

  render() {

    const { curriculumInfo, coursesToAssign } = this.props;

    const headers = ['Όνομα', 'Εξάμηνο', 'ID'];

    if (!curriculumInfo || !coursesToAssign) return null;

    return (
      <div className="Login">
        <Table>
          <thead>
            <tr>
              {headers.map((header) => (<th key={header}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(coursesToAssign).map((id) => (
              <tr key={coursesToAssign[id]._id} onClick={() => this.goToCoursePage(coursesToAssign[id])}>
                <td>{coursesToAssign[id].curriculumNames[curriculumInfo.curID]}</td>
                <td>{coursesToAssign[id].semester}</td>
                <td>{coursesToAssign[id].ids[curriculumInfo.curID]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = () => createStructuredSelector({
  curriculum: selectCurriculumToAssign,
  curriculumInfo: selectCurriculumInfo,
  coursesToAssign: selectCoursesToAssign,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CurriculumToAssign);
