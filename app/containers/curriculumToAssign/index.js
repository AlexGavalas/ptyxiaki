import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Table, Button, ProgressBar } from 'react-bootstrap';

import { selectCurriculumToAssign, selectCurriculumInfo, selectCoursesToAssign } from 'common/selectors';
import { fetchCoursesForOneCurriculum, addCourseToEdit } from 'common/actions';

const pick = (object, fields) => fields.reduce((acc, val) => (acc[val] = object[val], acc), {});

class CurriculumToAssign extends React.Component {

  componentDidMount() {

    this.props.dispatch(fetchCoursesForOneCurriculum(this.props.curriculum));
  }

  goToCoursePage = (course) => {

    this.props.dispatch(addCourseToEdit(course));

    this.props.history.push('/coursePage');
  }

  calculate = (course) => {

    const keys = ['labHours', 'theoryHours', 'tutorialHours', 'labSegments', 'theorySegments', 'tutorialSegments'];

    const remaining = pick(course, keys);

    const total = keys.reduce((acc, val) => acc + remaining[val], 0);

    const hours = course.hours || {};

    Object.keys(hours).forEach((assigned) => {

        const thisHours = pick(hours[assigned], keys);

        Object.keys(thisHours).forEach((hour) => {

          remaining[hour] -= thisHours[hour];
        });
    });

    let totalRemaining = total;

    keys.forEach((val) => totalRemaining -= remaining[val]);

    return parseInt((totalRemaining / total) * 100);
  };

  render() {

    const { curriculumInfo, coursesToAssign } = this.props;

    const headers = ['Όνομα', 'Εξάμηνο', 'ID', 'Πρόοδος'];

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
                <td><ProgressBar now={this.calculate(coursesToAssign[id])} label={`${this.calculate(coursesToAssign[id])}%`} /></td>
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
